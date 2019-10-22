import {Injectable, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {Observable, Observer, of, Subject} from "rxjs";
import {Zone} from "../../model/zone";
import {ZoneService} from "./zone.service";
import {GeoJson} from "../../map";
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
  private features = [];

  constructor(private zoneService : ZoneService,private geolocation: Geolocation,) {
    this.layoutCount = 0;
    this.onZoneSelected = new Subject<Zone>();
    this.selectZone$ = this.onZoneSelected.asObservable();
  }
  ngOnInit(): void {
  }

  buildMap(lat: number, lng: number, containerId:string){
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
      zoom: 15,
      optimize :false

    });
    this.map.on('load', () => {
      this.map.resize();
      this.flyTo(
         [lng, lat]
      );

      this.map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }));

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      this.clickPopUp();

      // Change the cursor to a pointer when the mouse is over the places layer
      // Change it back to a pointer when it leaves.
      this.map.on('mouseleave', 'places' + this.layoutCount, () => {
        this.map.getCanvas().style.cursor = '';
      });
    });
    this.map.on('style.load', () => {
      this.addLayer(lat, lng);
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
  flyTo(coordinates:number[]) {
    this.map.flyTo({
      center: coordinates
    });
  }



  // For changing layer on Map after changing location
  addNewLayer(lat: number, lng: number) {

    this.map.removeLayer('places' + this.layoutCount);
    this.map.removeImage('cat');
    this.features = [];
    this.addLayer(lat, lng);
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

   addLayer(lat: number, lng: number) {
    if(this.layoutCount!==0) {
      this.map.removeLayer('places' + this.layoutCount);
      this.map.removeImage('cat');
      this.features = [];
    }
    console.log('layer',this.layoutCount);
    this.layoutCount++;
    this.clickPopUp();

    this.zoneService.getNearbyZones(lat, lng).then(response =>{
      const data = JSON.parse(response.data);
      console.log("Nearby Zones",data);
      data.data.forEach(d=>{
            this.features.push({
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
      console.log('features:',this.features);
    }).catch(error => {
      console.log(error);
      this.zoneService.presentToast(error);
    });
    // tslint:disable-next-line:max-line-length
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
            features: this.features,
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

  gettingCoordinatesByLocality(locality) {
    console.log('locality:', locality);
    this.zoneService.getCoordinatesByLocality(locality).then(
        response => {
          const locationData = JSON.parse(response.data);
          // this.location = res;
          const lat = locationData.data.results[0].position.lat;
          const lng = locationData.data.results[0].position.lon;
          this.flyTo(
              [lng, lat]
          );
          this.marker( lat, lng );
          this.addLayer(lat, lng);

        }
    ).catch(error => {
      console.log('Error', error);
      this.zoneService.presentToast(error); });
  }


}
