import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleType } from '../model/VehicleType';
import { Resp } from '../model/VehicleType-response';
import { environment } from 'src/environments/environment';
import { Resp1 } from '../model/VehicleType-single-response';

@Injectable({
  providedIn: 'root'
})
export class VehicleTypeService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl + environment.typeBaseApi;
  getType(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl);
  }
  getVehicleByName(name: string): Observable<Resp1> {
    console.log("get vehicles by name called");
    console.log(this.baseUrl + '?registrationNo=' + name);
    return this.httpClient.get<Resp1>(this.baseUrl + '?name=' + name);
  }

  createType(VehicleType:Resp ) {
    return this.httpClient.post<Resp>(this.baseUrl, VehicleType);
  }


  updateVehicleType(name: string, type: VehicleType) {
    return this.httpClient.patch<VehicleType>(this.baseUrl + '/' + name, type);
  }


}
