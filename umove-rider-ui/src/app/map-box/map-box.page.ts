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
  private mapCanvas: Element;
  private items: string[];
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
    this.buildMap();
  }

  private initializeMap() {


  }

  // delay = ms => new Promise(res => {
  //   setTimeout(res, ms)
  // });


  // For building Map
  buildMap() {
    // this.mapCanvas = document.getElementsByClassName('mapboxgl-canvas')[0];
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.lng, this.lng],
      zoom: 15,

    });
    // this.map.on('load', () => {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(position => {
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //       console.log('location', this.lat, this.lng);
    //       this.marker(this.lat, this.lng);
    //       this.addLayer(this.lat, this.lng);
    //       this.map.flyTo({
    //         center: [this.lng, this.lat]
    //       });
    //
    //     });
    //   }
    //   // const waiting = () => {
    //   //   if (!this.map.isStyleLoaded()) {
    //   //     setTimeout(waiting, 100);
    //   //   } else {
    //   //     this.map.addControl(new mapboxgl.GeolocateControl({
    //   //       positionOptions: {
    //   //         enableHighAccuracy: true
    //   //       },
    //   //       trackUserLocation: true
    //   //     }));
    //
    //       // When a click event occurs on a feature in the places layer, open a popup at the
    //       // location of the feature, with description HTML from its properties.
    //       this.map.on('click', 'places' + this.layoutCount, (e) => {
    //         const coordinates = e.features[0].geometry.coordinates.slice();
    //         const description = e.features[0].properties.description;
    //         this.isSelected = true;
    //
    //         this.selectedzone = JSON.parse(e.features[0].properties.data);
    //         console.log('selected zone:', this.selectedzone);
    //         console.log(this.trip);
    //
    //         while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //           coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    //         }
    //         new mapboxgl.Popup()
    //             .setLngLat(coordinates)
    //             .setHTML(description)
    //             .addTo(this.map);
    //       });
    //
    //       // Change the cursor to a pointer when the mouse is over the places layer
    //       // Change it back to a pointer when it leaves.
    //       this.map.on('mouseleave', 'places' + this.layoutCount, () => {
    //         this.map.getCanvas().style.cursor = '';
    //       });
    //
    // });
    this.map.on('load', () => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
              this.lat = position.coords.latitude;
              this.lng = position.coords.longitude;
              console.log('location', this.lat, this.lng);
              this.marker(this.lat,this.lng);
              // this.addLayer(this.lat, this.lng);
              this.map.flyTo({
                  center: [this.lng, this.lat]
              });

          });
      }

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

      // Change the cursor to a pointer when the mouse is over the places layer
      // Change it back to a pointer when it leaves.
      this.map.on('mouseleave', 'places' + this.layoutCount, () => {
        this.map.getCanvas().style.cursor = '';
      });
    });
    this.map.on('style.load', () => {
      this.addLayer(this.lat,this.lng);

    });

  }

  // For showing marker on Map
  marker(lat, lng) {
    this.map.on('mouseenter', 'places', () => {
      this.map.getCanvas().style.cursor = 'pointer';
    });
    console.log("I am marker",lng,lat);

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
    // this.marker(lat,lng);
    // tslint:disable-next-line:max-line-length
    // this.zoneService.getNearbyZones(lat, lng).then(data => {
    //   this.data = data;
    //   console.log('Hello', data)
    //   // console.log(this.layoutCount);
    //   // console.log(this.data);
    // });
    this.data=[{
      "zoneId": "1",
      "name": "Zone-1",
      "lat": 12.93736,
      "lon": 77.61134,
      "city": "Bengaluru Urban",
      "state": "Karnataka",
      "country": "India",
      "pincode": "560045",
      "locality": "Block 7 Koramangala",
      "capacity": 50,
      "time": "2019-10-13T03:39:28.931+0000",
      "supervisorId": null,
      "supervisorName": null,
      "supervisorNumber": null,
      "supervisorEmail": null,
      "status": "INACTIVE"
    },
      {
        "zoneId": "2",
        "name": "Zone-2",
        "lat": 12.9416,
        "lon": 77.61718,
        "city": "Bengaluru Urban",
        "state": "Karnataka",
        "country": "India",
        "pincode": "560045",
        "locality": "Block 8 Koramangala",
        "capacity": 50,
        "time": "2019-10-14T04:10:47.595+0000",
        "supervisorId": null,
        "supervisorName": null,
        "supervisorNumber": null,
        "supervisorEmail": null,
        "status": "ACTIVE"
      },
      {
        "zoneId": "2",
        "name": "Zone-2",
        "lat": 12.9416,
        "lon": 77.61718,
        "city": "Bengaluru Urban",
        "state": "Karnataka",
        "country": "India",
        "pincode": "560045",
        "locality": "Block 8 Koramangala",
        "capacity": 50,
        "time": "2019-10-14T04:10:47.595+0000",
        "supervisorId": null,
        "supervisorName": null,
        "supervisorNumber": null,
        "supervisorEmail": null,
        "status": "ACTIVE"
      }
    ];
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
                  description: '<strong>Zone 1</strong><a href=\'\' target=\'_blank\'><button>Get Direction</button></a>',
                  icon: 'cat',
                  data: this.data[0],
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
                  data: this.data[1],
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
                  data: this.data[2],
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
    console.log('locality:',this.locality);
    this.zoneService.getCoordinatesByLocality(this.locality).then(
      res => {
        // this.location = res;
        // this.lat = this.location.results[0].position.lat;
        // this.lng = this.location.results[0].position.lon;
        console.log("Response:",res)
      }
    );
    console.log('HEllo', this.lat);
    this.markers.remove();
    this.marker(this.lat, this.lng);
    this.addNewLayer(this.lat, this.lng);
  }

}
