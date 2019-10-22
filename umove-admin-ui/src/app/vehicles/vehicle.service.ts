import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resp } from '../model/Vehicle-response';
import { Resp1 } from '../model/Vehicle-single-response';
import { Vehicle } from '../model/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl2 + environment.vehicleBaseApi;
  getVehicles(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl);
  }


  public createVehicles(vehicle: Resp) {
    return this.httpClient.post<Resp>(this.baseUrl, vehicle);
  }


  getVehicleByRegistrationNo(registrationNo: string): Observable<Resp1> {
    console.log(this.baseUrl + '?registrationNo=' + registrationNo);
    return this.httpClient.get<Resp1>(this.baseUrl + '?registrationNo=' + registrationNo);
  }

  getVehicleByZoneIdType(zoneId: string, type: string): Observable<Resp1> {
    console.log(this.baseUrl + '?zoneId=' + zoneId + '&type=' + type);
    return this.httpClient.get<Resp1>(this.baseUrl + '?zoneId=' + zoneId + '&type=' + type);
  }

  updateVehicle(registrationNo: string, vehicle: Vehicle) {
    return this.httpClient.patch<Vehicle>(this.baseUrl + '/' + registrationNo, vehicle);
  }


}
