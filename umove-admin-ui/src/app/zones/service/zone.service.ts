import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Resp } from 'src/app/model/zone-response';
import { Observable } from 'rxjs';
import { Zone } from 'src/app/model/zone';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl + environment.zoneBaseApi;

  public createZone(zone: Resp) {
    return this.httpClient.post<Resp>(this.baseUrl, zone);
  }

  getZones(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl);
  }

  getZoneByName(name: string): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl + '/name/' + name);
  }

  getZoneByLocality(name: string): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl + '/locality/' + name);
  }

  getAddress(locality: string): Observable<any> {
    return this.httpClient.
    get(this.baseUrl + '/loc/' + locality);
  }

  updateZones(name: string, zone: Zone) {
    return this.httpClient.patch<Zone>(this.baseUrl + '/' + name, zone);
  }

}
