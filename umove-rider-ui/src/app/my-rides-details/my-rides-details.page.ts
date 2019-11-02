import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Ride } from '../model/ride';
import { RideService } from '../service/ride.service';
import {Payment} from "../model/payment";

declare let RazorpayCheckout: any;

@Component({
  selector: 'app-my-rides-details',
  templateUrl: './my-rides-details.page.html',
  styleUrls: ['./my-rides-details.page.scss'],
})
export class MyRidesDetailsPage implements OnInit {
  name: string;
  email: string;
  contact: string;
  ride: Ride;
  paymentAmount = 333;
  currency = 'INR';
  rideId: any;
  razorKey = 'rzp_test_p3NNx70zMgBF3L';
  payment: Payment;

  constructor(private route: ActivatedRoute, private rideService: RideService, private router: Router) {
    this.rideId = this.route.snapshot.paramMap.get('rideId');
    console.log(this.rideId);

   }

  ngOnInit() {
    this.rideService.getBookingById(this.rideId).then(response => {
      console.log('Booking data: ', response.data);
      this.ride = JSON.parse(response.data).data;
        this.name = this.ride.rider.name;
        this.email = this.ride.rider.email;
        this.contact = this.ride.rider.mobileNumber;
        this.paymentAmount = Number(this.ride.paymentDetail.totalAmount) * 100;

        console.log(this.ride.paymentDetail.status);
    });
  }

  payWithRazor() {
    const options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razorKey, // your Key Id from Razorpay dashboard
      amount: this.paymentAmount, // Payment amount in smallest denomiation e.g. cents for USD
      name: this.name,
      prefill: {
        email: this.email,
        contact: this.contact,
        name: this.name
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondistion() {
          alert('dismissed');
        }
      }
    };

    const successCallback = (paymentId) => {
      this.rideService.setPaymentDetails(this.rideId, paymentId, 'Paid').then(response => {
        console.log('data of payment in sql: ', response.data);
        this.payment = JSON.parse(response.data).data;
      });
      this.rideService.presentAlert('', 'Your payment is successful.', 'Ok', () => {
        this.router.navigateByUrl('/my-rides');
      });

    };

    const cancelCallback = (error) => {
      this.rideService.setPaymentDetails(this.rideId, null, "Pending").then(response => {
        console.log('data of payment in sql: ', response.data);
        this.payment = JSON.parse(response.data).data;
      });
      this.rideService.presentAlert('', error.description , 'Ok', () => {
        this.router.navigateByUrl('/my-rides');
      });

    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
}
