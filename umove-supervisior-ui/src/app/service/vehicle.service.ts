import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseUrl = environment.baseUrl + environment.zoneService + environment.vehiclesBaseApi;
  // baseUrl = 'http:/localhost:8093/api/v1';
  vehicleList: [];


  constructor(private http: HTTP) { }

  getVehiclesByZone(supervisorId: string) {
    console.log(this.baseUrl );
    return this.http.get(this.baseUrl , {}, {});
  }

  changeStatus(vehicle: {}, registrationNo: string) {
    return this.http.patch(this.baseUrl  + '/' + registrationNo, vehicle, {});
  }

}
