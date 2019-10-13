import { Injectable } from '@angular/core';
import {Ride} from "../model/ride";
import {environment} from "../../environments/environment";
import {ToastController} from "@ionic/angular";
import {HTTP} from "@ionic-native/http/ngx";

@Injectable({
  providedIn: 'root'
})

export class RideService {

  currentBooking: Ride;
  baseUrl = environment.baseUrl + environment.bookingService + environment.bookingBaseApi;

  constructor(private http: HTTP, private toastController: ToastController) {
    this.currentBooking = new Ride();
    http.setDataSerializer("json");
    http.setHeader("*", "Content-Type", "application/json");
  }

  async presentToast(msg, duration) {
    const toast = await this.toastController.create({
      message: msg,
      duration
    });
    toast.present();
  }

  confirmBooking(data) {
    console.log('url', this.baseUrl);
    return this.http.post(this.baseUrl, data, {});
  }

  getAllBooking() {
    return this.http.get(this.baseUrl, {}, {});
  }

  getBookingById(id: string) {
    return this.http.get(this.baseUrl + '/' + id, {}, {});
  }

  getCurrentBooking() {
    return this.currentBooking;
  }

  setCurrentBooking(booking: Ride) {
    this.currentBooking = booking;
  }

}
