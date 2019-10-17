import { Component, OnInit } from '@angular/core';
import { Ride } from '../model/ride';
import { RideService } from '../service/ride.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-ride-detail',
  templateUrl: './confirm-ride-detail.page.html',
  styleUrls: ['./confirm-ride-detail.page.scss'],
})
export class ConfirmRideDetailPage implements OnInit {

  booking: Ride;

  constructor(private rideService: RideService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const state = this.router.getCurrentNavigation().extras.state;
      if (state) {
        if (state.selectedPaymentMethod) {
          this.booking.paymentMethod = state.selectedPaymentMethod;
        } else if (state.selectedPromocode) {
          this.booking.promocode = state.selectedPromocode;
        }
      }
    });
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

    this.booking.vehicle = {
      id: '5d8c7a62adfffb7e746ccee8',
      registrationNo: 'RJ21SA1982',
      insurance_no: 'IND3938dfk',
      lastServiceDate: new Date(),
      status: 'Free',
      time: new Date(),
      type: { name: 'Bullet', costkm: 5, costtime: 0.2,
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://auto.ndtvimg.com/bike-images/colors/royal-enfield/bullet-350/royal-enfield-bullet-350-bullet-trials-works-replica-350-red.png' },
      vehiclePurchased: new Date(),
      zoneid: '5d8c7a62adfffb7e746ccee8'
    };

    this.booking.sourceZone = {
      zoneId: '5d8c7a62adfffb7e746ccee8',
      name: 'Kormangla Zone-1',
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
    };

    this.booking.destinationZones.push({
      zoneId: '5d8c7a62adfffb7e746ccee8',
      name: 'Manayatha Zone-3',
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
  }

  confirmBooking() {
    this.rideService.confirmBooking(this.booking).then(response => {
      console.log('response: ', response);
      if (response && response.status === 201 && response.data) {
        this.router.navigateByUrl('ride-booking-details');
      } else if (!response) {
        this.rideService.presentToast('Error: Something Went Wrong, Try again.', 2000);
        this.router.navigateByUrl('home');
      } else {
        this.rideService.presentToast(response.data.message, 2000);
        this.router.navigateByUrl('home');
      }
    });
  } 

  removeSelectedPaymentMethod() {
    this.booking.paymentMethod = undefined;
  }

  removeSelectedPromocode() {
    this.booking.promocode = undefined;
  }
}
