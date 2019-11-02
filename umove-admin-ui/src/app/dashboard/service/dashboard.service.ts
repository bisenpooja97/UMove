import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resp } from 'src/app/model/zone-response';
// import { Resp } from 'src/app/model/vehicle-response';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private httpClient: HttpClient) { }
  baseUrl = 'https://umove-dev.stackroute.io/';
​
  getVehicleByStatus(status: string): Observable<Resp> {
    // console.log(this.baseUrl + '/api/v1/vehicles' + '?status=' + status);
    return this.httpClient.get<Resp>(this.baseUrl + 'zoneservice/api/v1/vehicles' + '?status=' + status);
  }

  getZones(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl);
  }

  getType(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl);
  }
​
  getZoneByStatus(status: string): Observable<Resp> {
    console.log(this.baseUrl  + 'zoneservice/api/v1/zones/status/' + status);
    return this.httpClient.get<Resp>(this.baseUrl  + 'zoneservice/api/v1/zones/status/' + status);
  }
}
