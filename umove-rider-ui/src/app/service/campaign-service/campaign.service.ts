import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HTTP} from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  baseUrl = environment.baseUrl + environment.campaignService + environment.campaignBaseApi;
  campaigns = 'campaigns';

  constructor(private http: HTTP) {
    http.setDataSerializer('json');
    http.setHeader('*', 'Content-Type', 'application/json');

  }

  // public getCampaignsList(): Observable<any> {
  //   console.log('url : ' + this.baseUrl + this.campaigns);
  //   return this.httpc.get(this.baseUrl + this.campaigns);
  // }
  public getCampaignsList() {
    console.log('im in service');
    console.log(this.baseUrl);
    return this.http.get(this.baseUrl + '/', {}, {});
  }
}
