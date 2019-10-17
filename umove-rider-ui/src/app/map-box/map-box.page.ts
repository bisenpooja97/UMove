import { Component, OnInit } from '@angular/core';
import { ZoneService} from '../service/zone/zone.service';
import {Zone} from '../model/zone';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson, FeatureCollection } from '../map';
import { environment } from '../../environments/environment';
import {HTTPResponse} from '@ionic-native/http';
// import {BookingService} from '../services/booking/booking.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.page.html',
  styleUrls: ['./map-box.page.scss'],
})
export class MapBoxPage implements OnInit {
  options: LaunchNavigatorOptions = {
    start: 'London, ON',
  };
  private response = null;
  constructor(private zoneService: ZoneService,
              private route: ActivatedRoute,
              private router: Router,
              private launchNavigator: LaunchNavigator,
              private geolocation: Geolocation
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
  lat = 12.934485599999999;
  lng =  77.6192336;
  locality: string;
  layoutCount = 0;
  page = 'pick-up';

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.marker(this.lat,this.lng);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.buildMap();
    console.log('page', this.page);
  }

  private initializeMap() {


  }


  // For building Map
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.lng, this.lng],
      zoom: 15,

    });
    this.map.on('load', () => {

      this.map.flyTo({
        center: [this.lng, this.lat]
      });

      this.map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }));

      // console.log('I am in popup');
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

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.


      // Change the cursor to a pointer when the mouse is over the places layer
      // Change it back to a pointer when it leaves.
      this.map.on('mouseleave', 'places' + this.layoutCount, () => {
        this.map.getCanvas().style.cursor = '';
      });
    });
    this.map.on('style.load', () => {
      this.addLayer(this.lat, this.lng);

    });

  }

  // clickPopUp(){
  //   console.log('I am in popup');
  //   this.map.on('click', 'places' + this.layoutCount, (e) => {
  //     const coordinates = e.features[0].geometry.coordinates.slice();
  //     const description = e.features[0].properties.description;
  //     this.isSelected = true;
  //
  //     this.selectedzone = JSON.parse(e.features[0].properties.data);
  //     console.log('selected zone:', this.selectedzone);
  //     console.log(this.trip);
  //
  //     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  //       coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  //     }
  //     new mapboxgl.Popup()
  //         .setLngLat(coordinates)
  //         .setHTML(description)
  //         .addTo(this.map);
  //   });
  // }

  navigate() {
    console.log('hello');
    this.launchNavigator.navigate([50.279306, -5.163158], this.options)
        .then(
            success => console.log('Launched navigator'),
            error => console.log('Error launching navigator', error)
        );
  }
  // For showing marker on Map
  marker(lat, lng) {
    this.map.on('mouseenter', 'places', () => {
      this.map.getCanvas().style.cursor = 'pointer';
    });
    console.log('I am marker', lng, lat);

    this.markers
      .setLngLat([lng, lat])
      .addTo(this.map);
    // function onDragEnd() {
    //   const lngLat = this.markers.getLngLat();
    //   console.log(lngLat.lat);
    // }
    // marker.on('dragend', this.addNewLayer(marker.getLngLat().lat, marker.getLngLat().lan));
    // this.markers.on('dragend', onDragEnd);
  }

  // For fly to different co-ordinates on map
  flyTo(data: GeoJson) {
    console.log('Fly to works', data.geometry.coordinates);
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
    // this.buildMap();
     this.addLayer(lat, lng);
  }

  // For adding layer on map for showing zones
  private addLayer(lat: number, lng: number) {
    this.layoutCount++;
    this.map.on('click', 'places' + this.layoutCount, (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
      this.isSelected = true;
      console.log('Layer', 'places'+this.layoutCount);
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


    console.log('newcoordinates:', this.lat, this.lng);
    this.zoneService.getNearbyZones(lat, lng).then(response => {
       this.response = response;
       this.data = JSON.parse(this.response.data);
    });
    // tslint:disable-next-line:max-line-length
    this.map.loadImage('https://images.vexels.com/media/users/3/129788/isolated/preview/04c91b04215f603567324d459b761807-chopper-bike-front-icon-by-vexels.png', (error, image) => {
      if (error) { throw error; }
      this.map.addImage('cat', image);
      console.log('data', this.data);
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
                  description: '<a href="http://maps.google.com/maps?saddr=' + this.lat + ',' + this.lng + '' +
                      '&daddr=' + this.data.data[0].lat + ',' + this.data.data[0].lon + '">' +
                      '<button>Get Directions</button></a> ',
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
                  description: '<a href="http://maps.google.com/maps?saddr=' + this.lat + ',' + this.lng +
                      '&daddr=' + this.data.data[1].lat + ',' + this.data.data[1].lon + '">' +
                      '<button>Get Directions</button></a>',
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
                  description: '<a href="http://maps.google.com/maps?saddr=' + this.lat + ',' + this.lng +
                      '&daddr=' + this.data.data[2].lat + ',' + this.data.data[2].lon + '">' +
                      '<button>Get Directions</button></a>',
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
          'icon-size': 0.10,
          'icon-allow-overlap': true
        }
      });
    });
  }

  gettingCoordinatesByLocality() {
    console.log('locality:', this.locality);
    this.zoneService.getCoordinatesByLocality(this.locality).then(
      res => {
        // this.location = res;
        // this.lat = this.location.results[0].position.lat;
        // this.lng = this.location.results[0].position.lon;
        console.log('Response:', res);
      }
    );
    // this.markers.remove();
    this.map.flyTo({
      center: [this.lng, this.lat]
    });
    this.marker( this.lat, this.lng );
    this.addNewLayer(this.lat, this.lng);

  }

}
