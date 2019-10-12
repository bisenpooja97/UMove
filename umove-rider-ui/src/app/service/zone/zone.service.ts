import {Injectable, OnInit} from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import {Observable, of,throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {AutoCompleteService} from 'ionic4-auto-complete';
import {environment} from "../../../environments/environment";
import { ToastController } from '@ionic/angular';
import {Zone} from "../../model/zone";

@Injectable({
  providedIn: 'root'
})

export class ZoneService implements AutoCompleteService, OnInit{
  //baseUrl = environment.baseUrl + environment.zoneService;
  // baseUrl = 'http:/172.23.:8093/api/v1';
  nearby = '/nearby';
  zones = '/zones';
  vehicles = '/vehicles';
  zoneList: Zone[];
  constructor(private http: HTTP, private toastController: ToastController) {
    this.zoneList = [];
  }
  // Service for getting 3 Nearby zones of user location
  public  getNearbyZones(lat: number, lon: number) {
    return this.http.get(environment.baseUrl + environment.zoneService + this.zones,{},{})
        .catch(error =>{
          console.log(error);
          this.presentToast(error);
        })
        // .pipe(catchError(ZoneService.handleError))

  }

  ngOnInit(): void {
    this.http.get(environment.baseUrl + environment.zoneService + this.zones,{},{})
        .then(res =>
            this.zoneList=res.data
    ).catch(error =>{
      console.log(error);
      this.presentToast(error)})
  }

  static handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);

    return throwError(errorMessage);
  }
  async presentToast(error) {
    const toast = await this.toastController.create({
      message: error,
      duration: 5000
    });
    toast.present();
  }

  //  Service for getting vehicles of a specific zone
  getVehiclesByZoneTypes(id: string) {
    return this.http.get(environment.baseUrl + environment.vehicleService + this.vehicles,{},{}  )
        .catch(error =>{ZoneService.handleError(error)})
  }

  getCoordinatesByLocality(locality: string) {
    return this.http.get(environment.tomTomUrl + locality + environment.tomtomKey,{},{})
        .catch(error =>{ZoneService.handleError(error)})

  }

  getResults(keyword: string): string[] {
    return this.zoneList.filter(
            (item) => {
              return item.locality.toLowerCase().startsWith(
                keyword.toLowerCase()
              );
            }
          )
            .map(item => item.locality)
            .filter((value, index, self) => self.indexOf(value) === index);
  }
}
