import { Component, OnInit } from '@angular/core';
import { ZoneService} from '../service/zone/zone.service';
import {Zone} from "../model/zone";
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson, FeatureCollection } from '../map';
import { environment } from '../../environments/environment';
// import {BookingService} from '../services/booking/booking.service';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.page.html',
  styleUrls: ['./map-box.page.scss'],
})
export class MapBoxPage implements OnInit {

  coordinates: {};
  data = null;
  markerss: any;
  selectedzone: Zone;
  isSelected = false;
  markers = new mapboxgl.Marker();
  trip = false;
  location: any;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/light-v10';
  lng = 12.934485599999999;
  lat =  77.6192336;
  locality: string;
  layoutCount = 0;
  page = 'pick-up';
  constructor(private zoneService: ZoneService,
              private route: ActivatedRoute,
              private router: Router,
              // private bookingService: BookingService
  ) {
    mapboxgl.accessToken = environment.map;

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.page = this.router.getCurrentNavigation().extras.state.page;
        // this.trip = this.router.getCurrentNavigation().extras.state.trip;
        console.log('page', this.page);
      }
    });
  }

  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log('location', this.lat, this.lng);
        this.map.flyTo({
          center: [this.lng, this.lat]
        });
      });
    }
    this.initializeMap();
  }

  private initializeMap() {
    this.buildMap();
    this.addLayer(this.lat, this.lng);
  }


  // For building Map
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: [this.lng, this.lng],
      zoom: 15
    });
    this.map.on('load', () => {
      this.map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }));

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      this.map.on('click', 'places' + this.layoutCount, (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
        this.isSelected = true;

        this.selectedzone = JSON.parse(e.features[0].properties.data);
        console.log('selected zone:', this.selectedzone);
        console.log(this.trip);

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(this.map);
      });
      this.marker();
      // Change the cursor to a pointer when the mouse is over the places layer
      // Change it back to a pointer when it leaves.
      this.map.on('mouseleave', 'places' + this.layoutCount, () => {
        this.map.getCanvas().style.cursor = '';
      });
    });
  }

  // For showing marker on Map
  marker() {
    this.map.on('mouseenter', 'places', () => {
      this.map.getCanvas().style.cursor = 'pointer';
    });

    this.markers
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);
    function onDragEnd() {
      const lngLat = this.markers.getLngLat();
      console.log(lngLat.lat);
    }
    // marker.on('dragend', this.addNewLayer(marker.getLngLat().lat, marker.getLngLat().lan));
    this.markers.on('dragend', onDragEnd);
  }

  // For fly to different co-ordinates on map
  flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates
    });
  }
  // For Sending Zone and trip data to service
  sendDataToService() {
    // const booking = this.bookingService.currentBooking;
    // booking.sourceZone = this.selectedzone;
    // if (this.trip) {
    // booking.destinationZones.push(this.selectedzone);
    // } else {
    //   booking.destinationZones.push(this.selectedzone);
    // }
    //
    // this.bookingService.setCurrentBooking(booking);
    const navigationExtras: NavigationExtras = {
      state: {
        trip: this.trip,
        pickUpZone: this.selectedzone
      }
    };
    this.coordinates = this.zoneService.getCoordinatesByLocality(this.locality);
    console.log('coordinates', this.coordinates);
    this.router.navigate(['bikelist'], navigationExtras);
  }
  booking() {
    const navigationExtras: NavigationExtras = {
      state: {
        trip: this.trip,
        pickUpZone: this.selectedzone
      }
    };
    this.router.navigate(['booking'], navigationExtras);
  }


  // For changing layer on Map after changing location
  addNewLayer(lat: number, lng: number) {
    this.map.removeLayer('places' + this.layoutCount);
    this.map.removeImage('cat');
    this.addLayer(lat, lng);
  }

  // For adding layer on map for showing zones
  private addLayer(lat: number, lng: number) {
    this.layoutCount++;
    console.log('newcoordinates:', this.lat, this.lng);
    // tslint:disable-next-line:max-line-length
    this.zoneService.getNearbyZones(lat, lng).then(data => {
      this.data = data;
      // console.log(this.layoutCount);
      // console.log(this.data);
    });
    // tslint:disable-next-line:max-line-length
    this.map.loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYj3weoUfW-nlGNmyPagbwlzDoUyIcwb4e908EgArQmoKDacnkA', (error, image) => {
      if (error) { throw error; }
      this.map.addImage('cat', image);
      console.log(this.data);
      // Add a layer showing the places.
      this.map.addLayer({
        id: 'places' + this.layoutCount,
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {
                  description: '<strong>Zone 1</strong><a href=\'\' target=\'_blank\'><button>Get Direction</button></a>',
                  icon: 'cat',
                  data: this.data.data[0],
                },

                geometry: {
                  type: 'Point',
                  coordinates: [
                    77.6192442,
                    12.9344758,
                  ]
                }
              },
              {
                type: 'Feature',
                properties: {
                  description: '<strong>Zone 2</strong><a href=\'\' target=\'_blank\'><button>Get Direction</button></a>',
                  icon: 'bicycle',
                  data: this.data.data[1],
                },
                geometry: {
                  type: 'Point',
                  coordinates: [
                    77.6180919,
                    12.9320263
                  ]
                }
              },
              {
                type: 'Feature',
                properties: {
                  description: '<strong>Zone 3</strong><a href=\'\' target=\'_blank\'><button>Get Direction</button></a>',
                  icon: 'bicycle',
                  data: this.data.data[2],
                },
                geometry: {
                  type: 'Point',
                  coordinates: [
                    77.6171146,
                    12.9340443
                  ]
                }
              }
            ]

          }
        },
        layout: {
          'icon-image': 'cat',
          'icon-size': 0.15,
          'icon-allow-overlap': true
        }
      });
    });
  }

  gettingCoordinatesByLocality() {
    this.zoneService.getCoordinatesByLocality(this.locality).then(
      res => {
        this.location = res;
        this.lat = this.location.results[0].position.lat;
        this.lng = this.location.results[0].position.lon;
      }
    );
    console.log('HEllo', this.lat);
    this.markers.remove();
    this.marker();
    this.addNewLayer(this.lat, this.lng);
  }
}
