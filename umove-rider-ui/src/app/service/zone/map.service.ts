import {Injectable, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {Observable, Observer, of, Subject, timer} from "rxjs";
import {Zone} from "../../model/zone";
import {ZoneService} from "./zone.service";
import {GeoJson,FeatureCollection} from "../../map";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class MapService implements OnInit{

  markers :any;
  map: mapboxgl.Map;
  private layoutCount: number;
  private isSelected: boolean;
  onZoneSelected: Subject<Zone>;
  selectZone$: Observable<Zone>;
  loading: Subject<any>;
  onLoad$: Observable<any>;


  constructor(private zoneService : ZoneService,private geolocation: Geolocation,) {
    this.layoutCount = 0;
    this.onZoneSelected = new Subject<Zone>();
    this.selectZone$ = this.onZoneSelected.asObservable();
    this.loading = new Subject<any>();
    this.onLoad$ = this.loading.asObservable();
  }
  ngOnInit(): void {
  }

  buildMap(lat: number, lng: number, containerId:string, isZone:boolean){

    this.layoutCount =0;
    mapboxgl.accessToken = environment.map;
    this.markers =new mapboxgl.Marker();
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
    // this.map.on('idle', () => {
    this.map.on('load', () => {
      console.log('map loaded');
      this.map.resize();
      if(isZone){
        this.flyTo(
            [lng, lat],
            1000,
            15
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
      this.map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }));
      }
      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      this.clickPopUp();

      // Change the cursor to a pointer when the mouse is over the places layer
      // Change it back to a pointer when it leaves.
      this.map.on('mouseleave', 'places' + this.layoutCount, () => {
        this.map.getCanvas().style.cursor = '';
      });
    });

    this.map.on('style.load',() => {
      console.log('style loaded');
      // setTimeout(() => {
      //   this.addLayer(lat,lng);
      //   console.log('Async operation has ended');
      //   style();
      // }, 500);
      if (isZone) {
        this.nearbyZonesLayer(lat, lng);
      }
      else {
         this.addPathLayer([ [77.61134,12.93736], [77.62245,12.93395]],lat,lng);
      }
    });

  }

  marker(lat, lng) {

    console.log('coordinates',lat,lng);
    this.map.on('mouseenter', 'places', () => {
      this.map.getCanvas().style.cursor = 'pointer';
    });
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
  flyTo(coordinates:number[],maxDuration:number,zoom:number) {
    this.map.flyTo({
      center: coordinates,
      maxDuration:maxDuration,
      // speed:2.4
      zoom: zoom
    });
  }



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
      new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(this.map);
    });
  }

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
    ],lat,lng)
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
  createFeature(zoneList:Zone[],lat:number,lng:number){
    if(this.layoutCount!==0) {
      this.map.removeLayer('places' + this.layoutCount);
      this.map.removeImage('cat');
    }
    console.log('layer',this.layoutCount);
    this.layoutCount++;
    this.clickPopUp();

    const features= [];
    zoneList.forEach(d=>{
          features.push({
            type: 'Feature',
            properties: {
              description: '<a href="http://maps.google.com/maps?saddr=' + lat + ',' + lng + '' +
                  '&daddr=' + d.lat + ',' + d.lon + '">' +
                  '<button>Get Directions</button></a> ',
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
    this.map.loadImage('https://images.vexels.com/media/users/3/129788/isolated/preview/04c91b04215f603567324d459b761807-chopper-bike-front-icon-by-vexels.png', (error, image) => {
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

  nearbyZonesLayer(lat: number, lng: number){
    this.zoneService.getNearbyZones(lat, lng).then(response =>{
      const data = JSON.parse(response.data);
      this.createFeature(data.data,lat,lng);
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
              1000,15
          );
          this.marker( lat, lng );
          this.nearbyZonesLayer(lat, lng);

        }
    ).catch(error => {
      console.log('Error', error);
      this.zoneService.presentToast(error); });
  }

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
