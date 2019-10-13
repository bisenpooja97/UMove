import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resp } from '../model/Vehicle-response';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl + environment.vehicleBaseApi;
  getVehicles(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl);
  }
}
