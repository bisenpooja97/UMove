import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseUrl = 'http://localhost:8080/vehicle-service/api/v1';
  // baseUrl = 'http:/localhost:8093/api/v1';
  vehicleList: [];
  zones = '/zones';
  vehicles = '/vehicles';

  constructor(private http: HTTP) { }

  getVehiclesByZone(supervisorId: string) {
    console.log(this.baseUrl + this.vehicles);
    return this.http.get(this.baseUrl + this.vehicles,{},{});
  }

  changeStatus(vehicle: {}, registrationNo: string) {
    return this.http.patch(this.baseUrl + this.vehicles + '/' + registrationNo, vehicle,{});
  }

}
