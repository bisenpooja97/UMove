import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import {Vehicle} from "../model/vehicle";
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseUrl = environment.baseUrl + environment.zoneService + environment.vehiclesBaseApi;

  constructor(private http: HTTP) {
    http.setDataSerializer('json');
    http.setHeader('*', 'Content-Type', 'application/json');
  }

  getVehiclesByZone(supervisorId: string) {
    console.log(this.baseUrl );
    return this.http.get(this.baseUrl , {}, {});
  }

  changeStatus(vehicle:Vehicle, registrationNo: string) {
    return this.http.patch(this.baseUrl  + '/' + registrationNo, vehicle, {});
  }

}
