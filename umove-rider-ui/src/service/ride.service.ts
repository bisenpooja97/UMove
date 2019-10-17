import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HTTP } from '@ionic-native/http/ngx';
import { Ride } from 'src/model/ride';
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
  getRidesByUserId(userId) {
    return this.http.get(this.baseUrl + '?userId=' + userId, {} , {});
  }
  getRidesById(id: string) {
    return this.http.get(this.baseUrl + '/' + id, {}, {});
  }

}
