import { Injectable } from '@angular/core';
import { Zone } from '../model/zone';
import {environment} from '../../environments/environment';
import {HTTP} from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  baseUrl = environment.baseUrl + environment.bookingService + environment.bookingBaseApi;
  // baseUrl = 'http://localhost:8094/api/v1/rides';

  constructor(private http: HTTP) { }

  // calling api for getting ride details for particular userId and rideStatus
  getRideDetailsByUserIdNStatus(userId: string, rideStatus: string) {
    return this.http.get(this.baseUrl + '?userId=' + userId + '&rideStatus=' + rideStatus, {}, {});
  }

  // calling api for starting a ride for particular rideId
  startRideById(rideId: string, vehicleNumber: string) {
    return this.http.patch(this.baseUrl + '/' + rideId + '/start' + '?vehicleNumber=' + vehicleNumber, {}, {});
  }

  // calling api for autocancelling a ride for particular rideId
  autocancelRideById(rideId: string) {
    return this.http.patch(this.baseUrl + '/' + rideId  + '/autocancel', {}, {});
  }

  // calling api for cancelling a ride for particular rideId
  cancelRideById(rideId: string) {
    return this.http.patch(this.baseUrl + '/' + rideId + '/cancel', {}, {});
  }

  // calling api for changing destination for particular rideId
  changeDestinationOfUser(zone: Zone, rideId: string) {
    return this.http.patch(this.baseUrl + '/' + rideId  + '/changeDestination', zone, {});
  }

  // calling api for ending a ride for particular rideId
  endRideRequestById(rideId: string) {
    return this.http.patch(this.baseUrl + '/' + rideId  + '/end', {}, {});
  }

  // // calling api for getting ended ride details for particular rideId
  // getRideDetailsById(rideId: string) {
  //   return this.http.get(this.baseUrl + '/' + rideId, {}, {});
  // }


}
