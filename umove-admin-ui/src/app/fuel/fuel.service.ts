import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Resp } from '../model/Fuel-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuelService{

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl + environment.fuelBaseApi;
  getFuel(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl);
  }
}
