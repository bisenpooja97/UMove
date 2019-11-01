import {Injectable, OnInit} from '@angular/core';
import {HTTP, HTTPResponse} from '@ionic-native/http/ngx';
import {AutoCompleteService} from 'ionic4-auto-complete';
import {environment} from '../../../environments/environment';
import { ToastController } from '@ionic/angular';
import {Zone} from '../../model/zone';

@Injectable({
    providedIn: 'root'
})

export class ZoneService implements AutoCompleteService, OnInit {
  baseUrl = environment.baseUrl + environment.zoneService  ;
  nearby = '/nearby';
  zoneList: Zone[];
    private response: HTTPResponse;
    private data: any;
    constructor(private http: HTTP, private toastController: ToastController) {
        this.zoneList = [];
        http.setDataSerializer('json');
        http.setHeader('*', 'Content-Type', 'application/json');
    }

    public  getNearbyZones(lat: number, lon: number): Promise<HTTPResponse> {
        console.log('zones api'+ this.baseUrl + environment.nearby +'?lon='+lon+'&lat='+lat);
        return this.http.get(this.baseUrl +environment.zones+ environment.nearby +'?lon='+lon+'&lat='+lat, {}, {})
    }

    ngOnInit(): void {
        this.http.get(this.baseUrl, {}, {})
            .then(response => {
                this.response = response;
                this.data = JSON.parse(response.data);
                this.zoneList = this.data.data;
            });

    }

    async presentToast(error) {
        console.log(error);
        const toast = await this.toastController.create({
            message: error,
            duration: 5000
        });
        toast.present();
    }

    //  Service for getting vehicles of a specific zone
    getVehiclesByZoneTypes(id: string): Promise<HTTPResponse> {
        console.log(this.baseUrl + environment.vehicles);
        return this.http.get(this.baseUrl + environment.vehicles+'?zoneId='+id+'&status=Free', {}, {}  )

    }

    getCoordinatesByLocality(locality: string): Promise<HTTPResponse> {
        console.log('locality:', locality);
        return this.http.get(this.baseUrl + environment.zones + '/loc/'+locality, {}, {})
    }

    getResults(keyword: string): string[] {
        this.http.get(this.baseUrl + environment.zones, {}, {})
            .then(response => {
                this.response = response;
                this.data = JSON.parse(response.data);
                this.zoneList = this.data.data;
            });
        console.log('zonelist', this.zoneList);
        return this.zoneList.filter(
            (item) => {
                console.log('item',item);
                return item.locality.toLocaleLowerCase().startsWith(
                    keyword.toLowerCase()
                );
            }
        )
            .map(item => item.locality)
            .filter((value, index, self) => self.indexOf(value) === index);
    }
}
