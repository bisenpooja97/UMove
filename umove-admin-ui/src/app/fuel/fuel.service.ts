import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Resp } from '../model/fuel-response';
import { Observable } from 'rxjs';

import { Fuel } from '../model/fuel';
import { Resp1 } from '../model/fuel-single-response';

@Injectable({
  providedIn: 'root'
})
export class FuelService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl1 + environment.fuelBaseApi;
  getFuel(): Observable<Resp> {
    console.log(this.baseUrl);
    return this.httpClient.get<Resp>(this.baseUrl);
  }

  public createFuel(fuel: Resp) {
    return this.httpClient.post<Resp>(this.baseUrl, fuel);
  }


  getFuelByName(name: string): Observable<Resp1> {
    console.log(this.baseUrl + '?name=' + name);
    return this.httpClient.get<Resp1>(this.baseUrl + '?name=' + name);
  }

  updateFuel(name: string, fuel: Fuel) {
    return this.httpClient.patch<Fuel>(this.baseUrl + '/' + name, fuel);
  }

}
