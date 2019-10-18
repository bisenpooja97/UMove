import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment';
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

getBookingById(id: string) {
  return this.http.get(this.baseUrl + '/rides' + '/' + id, {}, {});
}

setPaymentDetails(rideId: string, paymentId: string) {
  return this.http.put(this.baseUrl + '/payments?rideId=' + rideId + '&payment_Id=' + paymentId, {}, {});
}

getPaymentDetailsByBookingId(id: string) {
  return this.http.get(this.baseUrl + '/payments/' + id, {}, {});
}


}
