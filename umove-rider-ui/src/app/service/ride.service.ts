import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ride } from '../model/ride';
import { HTTP } from '@ionic-native/http/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  currentBooking: Ride;
  baseUrl = environment.baseUrl + environment.bookingService + environment.bookingBaseApi;
  constructor(private http: HTTP, private toastController: ToastController) {
    this.currentBooking = new Ride();
    http.setDataSerializer('json');
    http.setHeader('*', 'Content-Type', 'application/json');
  }
  async presentToast(msg, duration) {
    const toast = await this.toastController.create({
      message: msg,
      duration
    });
    toast.present();
  }
  getBookingById(id: string) {
    return this.http.get(this.baseUrl   + '/' + id, {}, {});
  }

  setPaymentDetails(rideId: string, paymentId: string, paymentStatus: string) {
    return this.http.put(this.baseUrl + '/payments?rideId=' + rideId + '&paymentId=' + paymentId + '&paymentStatus=' + paymentStatus, {}, {});
  }

  getPaymentDetailsByBookingId(id: string) {
    return this.http.get(this.baseUrl + '/payments/' + id, {}, {});
  }

}
