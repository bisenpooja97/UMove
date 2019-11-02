import {Injectable, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import {Observable,Subject, timer} from "rxjs";
import {Zone} from "../../model/zone";
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import {ZoneService} from "./zone.service";
import {GeoJson,FeatureCollection} from "../../map";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {environment} from "../../../environments/environment";
import {AndroidPermissions} from "@ionic-native/android-permissions/ngx";
@Injectable({
  providedIn: 'root'
})
export class MapService implements OnInit{
  markers :any;
  map: mapboxgl.Map;
  controller :number;
  private layoutCount: number;
  private isSelected: boolean;
  onZoneSelected: Subject<Zone>;
  selectZone$: Observable<Zone>;
  loading: Subject<any>;
  onLoad$: Observable<any>;
  popup = new mapboxgl.Popup({  closeOnClick: false,closeButton: false,alwaysOpen:true})
      .setText('No Nearby Zones Available');
  private locationCoords: any;


  constructor(private zoneService : ZoneService,private geolocation: Geolocation,private locationAccuracy: LocationAccuracy,private androidPermissions: AndroidPermissions) {
    this.layoutCount = 0;
    this.onZoneSelected = new Subject<Zone>();
    this.selectZone$ = this.onZoneSelected.asObservable();
    this.loading = new Subject<any>();
    this.controller=0;
    this.onLoad$ = this.loading.asObservable();
  }
  ngOnInit(): void {
  }

  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
        result => {
          if (result.hasPermission) {
            //If having permission show 'Turn On GPS' dialogue
            this.askToTurnOnGPS();
          } else {

            //If not having permission ask for permission
            this.requestGPSPermission();
          }
        },
        err => {
          alert(err);
        }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
            .then(
                () => {
                  // call method to turn on GPS
                  this.askToTurnOnGPS();
                },
                error => {
                  //Show alert if user click on 'No Thanks'
                  alert('requestPermission Error requesting location permissions ' + error)
                }
            );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
        () => {
          // When GPS Turned ON call method to get Accurate location coordinates
           this.getLocationCoordinates()
        },
        error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }
  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      const lat = resp.coords.latitude;
      const lng = resp.coords.longitude;
      this.buildMap(lat, lng, 'pickup', true);
    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }

  buildMap(lat: number, lng: number, containerId:string, isZone:boolean){

    this.layoutCount =0;
    mapboxgl.accessToken = environment.map;
    this.markers =new mapboxgl.Marker({
      color:'#344955',
    });
    console.log('map bn rha h',this.map);

    if(this.map !== undefined) {
      this.map = undefined;
    }

    this.map = new mapboxgl.Map({
      container: containerId,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lat, lng],
      optimize :false,
      interactive :isZone

    });



    this.checkMapLoading();
    this.map.on('load', () => {
      console.log('map loaded');
      this.map.resize();
      if(isZone){
        this.flyTo(
            [lng, lat],
            1000,
            12
        );
      }
      else {
        this.flyTo(
            [lng, lat],
            4000,
            13
        );
      }

      if(isZone){
        let controller =0;
      const geolocateController =new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      });
      this.map.addControl(geolocateController);
        geolocateController.on('geolocate', (result)=>
        {
          console.log('cntrlr',result.coords.latitude,result.coords.longitude);
          controller++;
          if(controller===1){
            const lat=result.coords.latitude;
            const lng=result.coords.longitude;
            this.nearbyZonesLayer(lat,lng);
          }


        });
        geolocateController.off('',(result) =>{
            console.log('off me hu',result);
        });

      const geolocator = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        zoom:13,
        marker: this.markers
      });
      this.map.addControl(geolocator);
      geolocator.on('result',(result)=>{
        this.nearbyZonesLayer(result.result.geometry.coordinates[1],result.result.geometry.coordinates[0]);
      })
      }
      this.clickPopUp();

      // Change the cursor to a pointer when the mouse is over the places layer
      // Change it back to a pointer when it leaves.
      this.map.on('mouseleave', 'places' + this.layoutCount, () => {
        this.map.getCanvas().style.cursor = '';
      });
    });

    this.map.on('style.load',() => {
      console.log('style loaded');
      if (isZone) {
        this.nearbyZonesLayer(lat, lng);
      }
      else {
         this.addPathLayer([ [77.61134,12.93736], [77.62245,12.93395]],lat,lng);
      }
    });
  }


  marker(lat, lng,status) {
    console.log('coordinates',lat,lng);
    this.map.on('mouseenter', 'places'+this.layoutCount, () => {
      this.map.getCanvas().style.cursor = 'pointer';
    });
    if(status){
     this.markers
        .setLngLat([lng, lat])
         .setPopup(this.popup)
         .addTo(this.map)
    }
    else {
      this.markers
          .setLngLat([lng, lat])
          .addTo(this.map)
    }

  }

  // For fly to different co-ordinates on map
  flyTo(coordinates:number[],maxDuration:number,zoom:number) {
    this.map.flyTo({
      center: coordinates,
      maxDuration:maxDuration,
      // speed:2.4
      zoom: zoom
    });
  }


  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  clickPopUp(){
    this.map.on('click', 'places' + this.layoutCount, (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
      this.isSelected = true;
      const selectedZone = JSON.parse(e.features[0].properties.data);
      this.onZoneSelected.next(selectedZone);

      console.log('selected zone:', selectedZone);
      // console.log(this.trip);

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      new mapboxgl.Popup({closeButton: false})
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(this.map);
    });
  }

  //For showing path between pick-up and drop zone
  addPathLayer(coords: number[][],lat:number,lng:number) {
    this.createFeature([
      {
        "id":"5dab25ec149b3f000139f56b",
        "name":"Koramangala-B7",
        "lat":12.93736,
        "lon":77.61134,
        "city":"Bengaluru Urban",
        "state":"Karnataka",
        "country":"India",
        "pincode":560002,
        "locality":"Koramangala Block 7",
        "capacity":25,
        "createdAt":new Date(),
        "supervisorId":"5da84c08a7b11b000121a8df",
        "supervisorName":"Bherulal",
        "supervisorNumber":"9234567890",
        "supervisorEmail":"bherula@gmail.com",
        "status":"ACTIVE"
      },
      {
        "id":"5dab2691149b3f000139f56c",
        "name":"Koramangala-B5",
        "lat":12.93395,
        "lon":77.62245,
        "city":"Bengaluru Urban",
        "state":"Karnataka",
        "country":"India",
        "pincode":560002,
        "locality":"Koramangala Block 5",
        "capacity":25,
        "createdAt":new Date(),
        "supervisorId":"5da84c08a7b11b000121a8df",
        "supervisorName":"Bherulal",
        "supervisorNumber":"9234567890",
        "supervisorEmail":"bherula@gmail.com",
        "status":"ACTIVE"
      }
    ],lat,lng,true);
    this.map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {

          },
          geometry: {
            type: 'LineString',
            coordinates: coords
          }
        }
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#326da8',
        'line-width': 8
      }
    });

  }

  //To create features array for any no. of zones
  createFeature(zoneList:Zone[],lat:number,lng:number,nearbyZones:boolean){
    if(this.layoutCount!==0) {
      this.map.removeLayer('places' + this.layoutCount);
      this.map.removeImage('cat');
    }
    if(nearbyZones){
    console.log('layer',this.layoutCount);
    this.layoutCount++;
    this.clickPopUp();

    const features= [];
    zoneList.forEach(d=>{
          features.push({
            type: 'Feature',
            properties: {
              description: '<ion-grid style="height: 40px"><ion-row style="align-items: center"><ion-col size="9">' +d.locality+
                  '</ion-col><ion-col size="3"><a href="http://maps.google.com/maps?saddr=' + lat + ',' + lng + '' +
                  '&daddr=' + d.lat + ',' + d.lon + '">' +
                  '<ion-icon style="width: 40px;height: 40px" name="compass"></ion-icon></a></ion-col></ion-row></ion-grid> ',
              icon: 'cat',
              data: d,
            },

            geometry: {
              type: 'Point',
              coordinates: [
                d.lon,
                d.lat,
              ]
            }
          })
        }
    );
    this.map.loadImage('assets/icon.png', (error, image) => {
      if (error) { throw error; }
      this.map.addImage('cat', image);
      // Add a layer showing the places.
      this.map.addLayer({
        id: 'places' + this.layoutCount,
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: features,
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
  }

  //For adding Layer to map for showing nearyby zones
  nearbyZonesLayer(lat: number, lng: number){
    console.log('i am in nearby layer');
    this.zoneService.getNearbyZones(lat, lng).then(response =>{
      const data = JSON.parse(response.data);
      // console.log('zones',data.data.length);
      if(data.data.length===0){
        // console.log('ptanhi',data.data===[]);
        this.marker(lat, lng,true);
        this.createFeature(data.data,lat,lng,false)
      }
      else {
        console.log('in else block');
        this.marker(lat, lng,false);
        this.createFeature(data.data,lat,lng,true);
      }
    }).catch(error => {
      console.log(error);
      this.zoneService.presentToast(error);
    });
  }


  gettingCoordinatesByLocality(locality) {
    console.log('locality:', locality);
    this.zoneService.getCoordinatesByLocality(locality).then(
        response => {
          const locationData = JSON.parse(response.data);
          // this.location = res;
          const lat = locationData.data.results[0].position.lat;
          const lng = locationData.data.results[0].position.lon;
          this.flyTo(
              [lng, lat],
              1000,13
          );
          // this.marker( lat, lng );
          this.nearbyZonesLayer(lat, lng);

        }
    ).catch(error => {
      console.log('Error', error);
      this.zoneService.presentToast(error); });
  }

  //To check whether the map is fully loaded or not before showing to user
  checkMapLoading() {
    timer(1000).subscribe(() => {
      if(this.map.loaded()) {
        console.log('load ho gya');
        this.loading.next("Map is loaded");
      }
      else {
        console.log('abhi ni hua');
        this.checkMapLoading();
      }
    });
  }
}
