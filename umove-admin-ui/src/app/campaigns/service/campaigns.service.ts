import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resp } from '../model/campaign-response';
import { Campaign } from '../model/campaign';



@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.baseUrl + environment.campaignBaseApi;

  getCampaigns(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl);
  }

  getCampaignsById(id: string){
    return this.httpClient.get<Resp>(this.baseUrl + '/' + id)
  }

  public addCampaign(campaign: Resp) {
    return this.httpClient.post<Resp>(this.baseUrl + '/addcampaign', campaign);
  }

  updateCampaignById(id: string, campaign: Campaign) {
    return this.httpClient.patch<Campaign>(this.baseUrl + '/' + id, campaign);
  }

public deleteCampaign(id: string) {
  return this.httpClient.delete<Resp>(this.baseUrl + '/' + id);
}

}
