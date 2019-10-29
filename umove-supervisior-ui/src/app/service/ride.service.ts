import { Injectable } from '@angular/core';
import {HTTP, HTTPResponse} from '@ionic-native/http/ngx';
import {environment} from '../../environments/environment';
import {ToastController} from '@ionic/angular';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  baseUrl = environment.baseUrl;
  bookingService = environment.bookingService;
  baseEndPoint = environment.bookingBaseApi;

  constructor(private http: HTTP, private toastController: ToastController) {
    http.head('*', 'Content-Type', 'application/json');
    http.setDataSerializer('json');
  }

  async presentToast(msg, duration) {
    const toast = await this.toastController.create({
      message: msg,
      duration
    });
    toast.present();
  }



  getRideDetailById(rideId): Promise<HTTPResponse> {
    console.log('get ride by id url:', this.baseUrl + this.bookingService + this.baseEndPoint + '/' + rideId);
    return this.http.get(this.baseUrl + this.bookingService + this.baseEndPoint + '/' + rideId, {}, {});
  }

  submitExtraCharges(bookingId, charges): Promise<HTTPResponse> {
    console.log('submit ride charges', this.baseUrl + this.bookingService + this.baseEndPoint + '/' + bookingId + '/extra-charges');
    console.log('charge', charges);
    // const jsonData = JSON.stringify(charges);
    // console.log('json data', jsonData);
    return this.http.patch(this.baseUrl + this.bookingService + this.baseEndPoint + '/' + bookingId
        + '/extra-charges', charges, {});
  }
}
