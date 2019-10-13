import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleType } from '../model/VehicleType';
import { Resp } from '../model/VehicleType-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleTypeService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl + environment.typeBaseApi;
  getType(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl);
  }


}
