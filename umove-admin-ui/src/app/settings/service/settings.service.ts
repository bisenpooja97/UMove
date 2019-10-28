import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/model/configuration';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  baseUrl = environment.baseUrl3 + environment.bookingService + environment.configBaseApi;

  constructor(private httpClient: HttpClient) { }

  getConfigurationByName(name: string): Observable<Configuration> {
    return this.httpClient.get<Configuration>(this.baseUrl + '/' + name);
  }

  updateConfigurationByName(name: string): Observable<Configuration> {
    return this.httpClient.patch<Configuration>(this.baseUrl + '/' + name, {});
  }

}
