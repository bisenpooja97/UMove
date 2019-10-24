import { Component, OnInit } from '@angular/core';
import { Ride } from 'src/app/model/ride';

import { Router } from '@angular/router';
import { PaymentDetail } from 'src/app/model/paymentdetail';
import { Payment } from 'src/app/model/payment';
import { RideService } from '../service/ride.service';

declare let RazorpayCheckout: any;

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {
  bookingId: string;
  name: string;
  email: string;
  contact: string;
  rides: Ride;
  paymentAmount = 333;
  currency = 'INR';
  currencyIcon = '$';
  razorKey = 'rzp_test_p3NNx70zMgBF3L';
  rideData: Ride;
  extraChargeStatus: boolean;
  paymentDetail: PaymentDetail;
  appliedPromoCode: boolean;
  payment: Payment;
  rideStatusPaid: boolean;
  rideStatusUnPaid: boolean;
  petrolCharge: boolean;
  showExtraCharge: boolean;


  constructor(private rideService: RideService, private route: Router) {
    this.bookingId = '5db071a0d02e7d0001e5d7b5';
    this.rideStatusPaid = false;
    this.rideStatusUnPaid = false;
    this.petrolCharge = false;
    this.extraChargeStatus = false;
  }

  ngOnInit() {
    this.rideService.getBookingById(this.bookingId).then(response => {
      this.rides = JSON.parse(response.data).data;
      this.name = this.rides.rider.name;
      this.email = this.rides.rider.email;
      this.contact = this.rides.rider.mobileNumber;
      this.paymentAmount = Number(this.rides.paymentDetail.totalAmount) * 100;
      if (this.rides.paymentDetail.totalExtraCharges === undefined) {
        this.extraChargeStatus = false;
      } else {
        this.extraChargeStatus = true;
      }
      if (this.rides.paymentDetail.fuelRefillAmount === undefined || this.rides.paymentDetail.fuelRefillAmount === 0) {
        this.petrolCharge = false;
      } else {
        this.petrolCharge = true;
      }
      if (this.rides.promocode === null) {
         this.appliedPromoCode = false;
      } else {
        this.appliedPromoCode = true;
      }
      if (this.rides.paymentDetail.status === 'Paid') {
        this.rideStatusPaid = true;
      } else {
        this.rideStatusUnPaid = true;
      }
     });
  }
  showExtraCharges(statusExtraCharge: boolean) {
    if (statusExtraCharge === false) {
    this.showExtraCharge = true;
    console.log(this.showExtraCharge);
    this.rideService.presentToast(this.showExtraCharge, 3000);
  } else {
      this.showExtraCharge = false;
    }
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
      this.rideService.setPaymentDetails(this.bookingId, paymentId, "Paid").then(response => {
        console.log('data of payment in sql: ', response['data']);
        this.payment = JSON.parse(response.data).data;
        this.route.navigateByUrl('/home');
      });
    };

    const cancelCallback = (error) => {
      this.rideService.setPaymentDetails(this.bookingId, null, "Pending").then(response => {
        console.log('data of payment in sql: ', response['data']);
        this.payment = JSON.parse(response.data).data;
        this.route.navigateByUrl('/home');
      });
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }



}
