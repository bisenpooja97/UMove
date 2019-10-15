import {Injectable, OnInit} from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import {Observable, of,throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {AutoCompleteService} from 'ionic4-auto-complete';
import {environment} from "../../../environments/environment";
import { ToastController } from '@ionic/angular';
import {Zone} from "../../model/zone";

@Injectable({
  providedIn: 'root'
})

export class ZoneService implements AutoCompleteService, OnInit{
  //baseUrl = environment.baseUrl + environment.zoneService;
  // baseUrl = 'http:/172.23.:8093/api/v1';
  nearby = '/nearby';
  zones = '/zones';
  vehicles = '/vehicles';
  zoneList: Zone[];
  constructor(private http: HTTP, private toastController: ToastController) {
    this.zoneList = [];
  }
  // Service for getting 3 Nearby zones of user location
  public  getNearbyZones(lat: number, lon: number) {
    // console.log(environment.baseUrl + environment.zoneService + this.zones);
    return this.http.get(environment.baseUrl + environment.zoneService + this.zones,{},{})
        .catch(error =>{
          console.log(error);
          this.presentToast(error);
        })
  }

  ngOnInit(): void {
    this.zoneList= [{
        "id": "1",
        "name": "Zone-1",
        "lat": 12.93736,
        "lon": 77.61134,
        "city": "Bengaluru Urban",
        "state": "Karnataka",
        "country": "India",
        "pincode": 560045,
        "locality": "Block 7 Koramangala",
        "capacity": 50,
        "createdAt": new Date(),
        "supervisorId": null,
        "supervisorName": null,
        "supervisorNumber": null,
        "supervisorEmail": null,
        "status": "INACTIVE"
    },
        {
            "id": "2",
            "name": "Zone-2",
            "lat": 12.9416,
            "lon": 77.61718,
            "city": "Bengaluru Urban",
            "state": "Karnataka",
            "country": "India",
            "pincode": 560045,
            "locality": "Block 8 Koramangala",
            "capacity": 50,
            "createdAt": new Date(),
            "supervisorId": null,
            "supervisorName": null,
            "supervisorNumber": null,
            "supervisorEmail": null,
            "status": "ACTIVE"
        },
        {
            "id": "2",
            "name": "Zone-2",
            "lat": 12.9416,
            "lon": 77.61718,
            "city": "Bengaluru Urban",
            "state": "Karnataka",
            "country": "India",
            "pincode": 560045,
            "locality": "Block 8 Koramangala",
            "capacity": 50,
            "createdAt": new Date(),
            "supervisorId": null,
            "supervisorName": null,
            "supervisorNumber": null,
            "supervisorEmail": null,
            "status": "ACTIVE"
        }
    ];
    // this.http.get(environment.baseUrl + environment.zoneService + this.zones,{},{})
    //     .then(res =>
    //         this.zoneList=res.data
    // ).catch(error =>{
    //   console.log(error);
    //   this.presentToast(error)})

  }

  async presentToast(error) {
    const toast = await this.toastController.create({
      message: error.message,
      duration: 5000
    });
    toast.present();
  }

  //  Service for getting vehicles of a specific zone
  getVehiclesByZoneTypes(id: string) {
    console.log(environment.baseUrl + environment.vehicleService + this.vehicles);
    return this.http.get(environment.baseUrl + environment.vehicleService + this.vehicles,{},{}  )
        .catch(error =>{
          console.log(error);
          this.presentToast(error)})
  }

  getCoordinatesByLocality(locality: string) {
      console.log('locality:',locality);
    return this.http.get('https://api.tomtom.com/search/2/structuredGeocode.json?countryCode=IND&' + locality + '&key=Q0lrXtgq4yAgXdZuyf7RBbItuzVuRxUj',{},{})
        .catch(error =>{
          console.log(error);
          this.presentToast(error)})
  }

  getResults(keyword: string): string[] {
      console.log('autocomplete chala!!!');
      this.zoneList= [{
          "id": "1",
          "name": "Zone-1",
          "lat": 12.93736,
          "lon": 77.61134,
          "city": "Bengaluru Urban",
          "state": "Karnataka",
          "country": "India",
          "pincode": 560045,
          "locality": "Block 7 Koramangala",
          "capacity": 50,
          "createdAt": new Date(),
          "supervisorId": null,
          "supervisorName": null,
          "supervisorNumber": null,
          "supervisorEmail": null,
          "status": "INACTIVE"
      },
          {
              "id": "2",
              "name": "Zone-2",
              "lat": 12.9416,
              "lon": 77.61718,
              "city": "Bengaluru Urban",
              "state": "Karnataka",
              "country": "India",
              "pincode": 560045,
              "locality": "Block 8 Koramangala",
              "capacity": 50,
              "createdAt": new Date(),
              "supervisorId": null,
              "supervisorName": null,
              "supervisorNumber": null,
              "supervisorEmail": null,
              "status": "ACTIVE"
          },
          {
              "id": "2",
              "name": "Zone-2",
              "lat": 12.9416,
              "lon": 77.61718,
              "city": "Bengaluru Urban",
              "state": "Karnataka",
              "country": "India",
              "pincode": 560045,
              "locality": "Block 8 Koramangala",
              "capacity": 50,
              "createdAt": new Date(),
              "supervisorId": null,
              "supervisorName": null,
              "supervisorNumber": null,
              "supervisorEmail": null,
              "status": "ACTIVE"
          }
      ];
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
