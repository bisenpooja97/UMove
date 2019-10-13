import { Component, OnInit } from '@angular/core';
import {Ride} from "../model/ride";
import {RideService} from "../service/ride.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm-ride-detail',
  templateUrl: './confirm-ride-detail.page.html',
  styleUrls: ['./confirm-ride-detail.page.scss'],
})
export class ConfirmRideDetailPage implements OnInit {

  booking: Ride;

  constructor(private rideService: RideService, private router: Router) {
  }

  ngOnInit() {

    this.booking = this.rideService.getCurrentBooking();
    this.booking.destinationZones = [];

    /*
      dummy data which will be replaced by the actual data.
    */
    this.booking.rider = {
      _id: '5d8bbc0da6e87d5404aa1921',
      name: 'Visnu',
      email: 'bochiwal.visnu@gmail.com'
    };

    this.booking.destinationZones.push({
      zoneId: '5d8c7a62adfffb7e746ccee8',
      name: 'Zone-2',
      lat: -85.2065802380484,
      lon: 42.70837049544012,
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      pincode: 560034,
      locality: 'Madiwala',
      capacity: 10,
      supervisorId: '1',
      supervisorName: 'Subhash',
      supervisorNumber: '9196778866',
      supervisorEmail: 'subhash@gmail.com',
      status: 'ACTIVE'
    });

    console.log('payment method: ', this.booking.paymentMethod);
    console.log('promocode', this.booking.promocode);

    // dummy data ends here
  }

  confirmBooking() {
    this.rideService.confirmBooking(this.booking).then(response => {
      console.log('response: ', response);
      if (response && response.status === 201 && response.data.status === 'CREATED') {
        this.router.navigateByUrl('booking-details');
      } else if (!response) {
        this.rideService.presentToast('Error: Something Went Wrong, Try again.', 2000);
        this.router.navigateByUrl('home');
      } else {
        this.rideService.presentToast(response.data.message, 2000);
        this.router.navigateByUrl('home');
      }
    });
  }

}
