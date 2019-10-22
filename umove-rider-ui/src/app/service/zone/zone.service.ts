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
  // baseUrl = 'http://172.23.234.112:8093/api/v1/zones';

  baseUrl = environment.baseUrl + environment.zoneService + environment.zones ;
  vehicles = '/vehicles';
  zoneList: Zone[];
    private response: HTTPResponse;
    private data: any;
  constructor(private http: HTTP, private toastController: ToastController) {
    this.zoneList = [];
  }
  // Service for getting 3 Nearby zones of user location
  public  getNearbyZones(lat: number, lon: number) {
    // console.log(environment.baseUrl + environment.zoneService + this.zones);
    return this.http.get(this.baseUrl, {}, {})
        .catch(error => {
          console.log(error);
          this.presentToast(error);
        });
  }
    public  getNearbyZone(lat: number, lon: number) {
         console.log('zones api' + this.baseUrl + environment.nearby + '?lon=' + lon + '&lat=' + lat);
         return this.http.get(this.baseUrl + environment.nearby + '?lon=' + lon + '&lat=' + lat, {}, {})
            .catch(error => {
                console.log(error);
                this.presentToast(error);
            });
    }

  ngOnInit(): void {
    // this.zoneList = [{
    //     'id': '1',
    //     'name': 'Zone-1',
    //     'lat': 12.93736,
    //     'lon': 77.61134,
    //     'city': 'Bengaluru Urban',
    //     'state': 'Karnataka',
    //     'country': 'India',
    //     'pincode': 560045,
    //     'locality': 'Block 7 Koramangala',
    //     'capacity': 50,
    //     'createdAt': new Date(),
    //     'supervisorId': null,
    //     'supervisorName': null,
    //     'supervisorNumber': null,
    //     'supervisorEmail': null,
    //     'status': 'INACTIVE'
    // },
    //     {
    //         'id': '2',
    //         'name': 'Zone-2',
    //         'lat': 12.9416,
    //         'lon': 77.61718,
    //         'city': 'Bengaluru Urban',
    //         'state': 'Karnataka',
    //         'country': 'India',
    //         'pincode': 560045,
    //         'locality': 'Block 8 Koramangala',
    //         'capacity': 50,
    //         'createdAt': new Date(),
    //         'supervisorId': null,
    //         'supervisorName': null,
    //         'supervisorNumber': null,
    //         'supervisorEmail': null,
    //         'status': 'ACTIVE'
    //     },
    //     {
    //         'id': '2',
    //         'name': 'Zone-2',
    //         'lat': 12.9416,
    //         'lon': 77.61718,
    //         'city': 'Bengaluru Urban',
    //         'state': 'Karnataka',
    //         'country': 'India',
    //         'pincode': 560045,
    //         'locality': 'Block 8 Koramangala',
    //         'capacity': 50,
    //         'createdAt': new Date(),
    //         'supervisorId': null,
    //         'supervisorName': null,
    //         'supervisorNumber': null,
    //         'supervisorEmail': null,
    //         'status': 'ACTIVE'
    //     }
    // ];
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
  getVehiclesByZoneTypes(id: string) {
    console.log(environment.baseUrl + environment.vehicleService + this.vehicles);
    return this.http.get(environment.baseUrl + environment.vehicleService + this.vehicles, {}, {}  )
        .catch(error => {
          console.log(error);
          this.presentToast(error); });
  }

  getCoordinatesByLocality(locality: string) {
      console.log('locality:', locality);
      return this.http.get(this.baseUrl + '/loc/' + locality, {}, {})
        .catch(error => {
          console.log('Error', error);
          this.presentToast(error); });
  }

  getResults(keyword: string): string[] {
      this.http.get(this.baseUrl, {}, {})
          .then(response => {
              this.response = response;
              this.data = JSON.parse(response.data);
              console.log('data', this.data.data);
              this.zoneList = this.data.data;
          });
      console.log('zonelist', this.zoneList);
      return this.zoneList.filter(
            (item) => {
              return item.locality.toLowerCase().startsWith(
                keyword.toLowerCase()
              );
            }
          )
            .map(item => item.locality)
            .filter((value, index, self) => self.indexOf(value) === index);
  }
}
