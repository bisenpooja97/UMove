import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {AutoCompleteService} from 'ionic4-auto-complete';

@Injectable({
  providedIn: 'root'
})
export class ZoneService implements AutoCompleteService {
  baseUrl = 'http://172.23.234.99:8093/api/v1/zones';
  zones = '/nearby';
  vehicles = '/vehciles';
  trip: boolean;
  selectedZone: object;
  destinationZone: object;
  selectedType: object;

  zoneList: [];

  constructor(private http: HttpClient) {
    this.zoneList = [];
  }

    // Service for getting 3 Nearby zones of user location
    public  getNearbyZones(lat: number, lon: number) {
        console.log('url:' + this.baseUrl + this.zones + '?lon=' + lon + '&' + 'lat=' + lat);
        return this.http.get(this.baseUrl + this.zones + '?lon=' + lon + '&' + 'lat=' + lat);
    }

  //  Service for getting vehicles of a specific zone
  public getVehiclesByZoneType(id: string) {
      console.log(('url:' + this.baseUrl + this.vehicles + '/' + id ));
      // return this.http.get(this.baseUrl + this.vehicles + '/' + id );
      return this.http.get('http://172.23.234.125:8093/api/v1/zones/vehicles/' + '5d8b5854a6e87d1720796c8f');
  }

  // Service for setting zones as per selected zone and trip type
  public setZone(zone: object, trip: boolean) {
      if (!trip) {
          this.selectedZone = zone;
          this.destinationZone = zone;
      } else {
          this.selectedZone = zone;
      }
  }

  public getAllZonesByLocality(locality: string) {
        return this.http.get('http://172.23.234.99:8093/api/v1/zones/searchByLocality/' + locality);
  }

  public getAllZones() {
    return this.http.get('http://172.23.234.99:8093/api/v1/zones');
  }
  // Service for getting selected source zone
  public getSourceZone() {
      console.log(this.selectedZone);
      return this.selectedZone;
  }

  // Service for getting selected destination zone
  public getDestinationZone() {
      return this.destinationZone;
  }
  getResults(keyword: string): Observable<any[]> {
    let observable: Observable<any>;
    if (this.zoneList.length === 0) {
      observable = this.http.get('http://172.23.234.99:8093/api/v1/zones');
    } else {
      observable = of(this.zoneList);
    }
    return observable.pipe(
      map(
        (result) => {
          console.log('result', result);
          return result.data.filter(
            (item) => {
              console.log('item', item);
              return item.locality.toLowerCase().startsWith(
                keyword.toLowerCase()
              );
            }
          )
            .map(item => item.locality)
            .filter((value, index, self) => self.indexOf(value) === index);
        }
      )
    );
  }
}
