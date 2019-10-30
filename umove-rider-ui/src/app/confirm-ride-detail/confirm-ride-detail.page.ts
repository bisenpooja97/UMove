import { Component, OnInit } from '@angular/core';
import { Ride } from '../model/ride';
import { RideService } from '../service/ride.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {MapService} from '../service/zone/map.service';
import {Storage} from '@ionic/storage';
import {User} from "../model/user";

@Component({
  selector: 'app-confirm-ride-detail',
  templateUrl: './confirm-ride-detail.page.html',
  styleUrls: ['./confirm-ride-detail.page.scss'],
})
export class ConfirmRideDetailPage implements OnInit {

  booking: Ride;
  key = 'details';

  constructor(private rideService: RideService, private mapService: MapService, private geolocation: Geolocation,
              private actionSheetController: ActionSheetController, private router: Router,
              private route: ActivatedRoute, private storage: Storage) {
    this.route.queryParams.subscribe(params => {
      const state = this.router.getCurrentNavigation().extras.state;
      if (state) {
        if (state.selectedPaymentMethod) {
          console.log('payment method, ', state.selectedPaymentMethod);
          this.booking.paymentMethod = state.selectedPaymentMethod;
          console.log('selected payment method: ', this.booking.paymentMethod);
        } else if (state.selectedPromocode) {
          this.booking.promoCode = state.selectedPromocode;
        }
      }
    });
  }

  ngOnInit() {

  }

  confirmBooking() {
    this.rideService.confirmBooking(this.booking).then(response => {
      console.log('response: ', response);
      if (response && response.status === 201 && response.data) {
        this.router.navigateByUrl('ride-booking-details');
      } else if (!response) {
        this.rideService.presentToast('Error: Something Went Wrong, Try again.', 2000);
        this.router.navigateByUrl('');
      } else {
        this.rideService.presentToast(JSON.parse(response.data).message, 2000);
        this.router.navigateByUrl('');
      }
    });
  }

  removeSelectedPaymentMethod() {
    this.booking.paymentMethod = undefined;
  }

  removeSelectedPromocode() {
    this.booking.promoCode = undefined;
  }

  ionViewDidEnter() {
    this.booking = this.rideService.getCurrentBooking();
    this.storage.get(this.key).then(value => {
      console.log('Before:', value);
      this.booking.rider = new User();
      this.booking.rider._id = value.id;
      this.booking.rider.email = 'punit@gmail.com';
      this.booking.rider.name = 'Punit Setia';
    });

    if (!this.booking.vehicle) {
      this.rideService.presentToast('Please Select a Vehicle.', 2000);
      this.router.navigateByUrl('home');
    } else if (!this.booking.sourceZone) {
      this.rideService.presentToast('Please Select a Source Zone', 2000);
      this.router.navigateByUrl('home');
    } else if (!this.booking.destinationZones || !this.booking.destinationZones.length) {
      this.rideService.presentToast('Please Select a Destination Zone', 2000);
      this.router.navigateByUrl('home');
    }
    console.log('map dikhana h !!');
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('ab to dikhna chahiye tha!');
      const lat = resp.coords.latitude;
      const lng = resp.coords.longitude;
      this.mapService.buildMap(lat, lng, 'booking', false);
      // this.mapService.checkMapLoading();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
