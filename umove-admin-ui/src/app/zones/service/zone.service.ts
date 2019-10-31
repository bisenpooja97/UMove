import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Resp } from 'src/app/model/zone-response';
import { Observable } from 'rxjs';
import { Zone } from 'src/app/model/zone';
import { RespSupervisor, RespSupervisor2 } from 'src/app/model/supervisor-response';
import { Supervisor } from 'src/app/model/supervisor';
import { RespZTC } from 'src/app/model/zone-type-repo';
import { ZoneTypeCount } from 'src/app/model/zone-type-count';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl + environment.zoneService  + environment.zoneBaseApi;

  createZone(zone: Resp) {
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
    return this.httpClient.get(this.baseUrl + '/loc/' + locality);
  }

  updateZones(name: string, zone: Zone) {
    return this.httpClient.patch<Zone>(this.baseUrl + '/' + name, zone);
  }

  getSupervisor(): Observable<RespSupervisor> {
    return this.httpClient.get<RespSupervisor>('https://umove-dev.stackroute.io/userservice/api/v1/users?role=Supervisor&status=Unallocated');
  }

  getSupervisorById(id: string): Observable<RespSupervisor2> {
    return this.httpClient.get<RespSupervisor2>('https://umove-dev.stackroute.io/userservice/api/v1/users/' + id);

  }

  updateSupervisorStatus(id: string, supervisor: Supervisor) {
    return this.httpClient.patch<Supervisor>('https://umove-dev.stackroute.io/userservice/api/v1/users/' + id , supervisor);
  }

  getZoneType(zid: string, tid: string): Observable<RespZTC> {
    return this.httpClient.get<RespZTC>(environment.baseUrl + environment.zoneService +
      '/api/v1/zoneTypeCount' + '?zoneId=' + zid + '&typeId=' + tid);
  }

  createNew(zoneTypeCount: ZoneTypeCount) {
    return this.httpClient.post<ZoneTypeCount>(environment.baseUrl + environment.zoneService +
       '/api/v1/zoneTypeCount', zoneTypeCount);
  }

  updateZoneTypeCount(zid: string, tid: string, zoneTypeCount: ZoneTypeCount) {
    return this.httpClient.patch<ZoneTypeCount>(environment.baseUrl + environment.zoneService +
       '/api/v1/zoneTypeCount' +
     '?zoneId=' + zid + '&typeId=' + tid, zoneTypeCount);
  }
}
