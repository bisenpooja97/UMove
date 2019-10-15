import { Component, OnInit } from '@angular/core';
import { Ride } from 'src/model/ride';
import { PaymentDetails } from 'src/model/paymentdetail';
import { RideService } from 'src/service/ride.service';
import { Router } from '@angular/router';

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
  contact: number;
  rides: Ride;
  paymentAmount = 333;
  currency = 'INR';
  currencyIcon = '$';
  razorKey = 'rzp_test_p3NNx70zMgBF3L';
  rideData: Ride;
  extraChargeStatus: boolean;
  payment: PaymentDetails;
  appliedPromoCode: boolean;
  paidAmount: number;

  constructor(private rideService: RideService, private route: Router) {
    this.bookingId = '5da468f908813b0001892b5a';
  }

  ngOnInit() {
    this.rideService.getBookingById(this.bookingId).then(response => {
      this.rides = JSON.parse(response.data).data;
      this.name = this.rides.rider.name;
      this.email = this.rides.rider.email;
      this.contact = this.rides.rider.mobile;
      this.paidAmount = this.rides.payment.totalAmount + this.rides.payment.totalExtraCharges;
      this.paymentAmount = Number(this.paidAmount) * 100;
      if (this.rides.payment.totalExtraCharges === undefined) {
        this.extraChargeStatus = false;
      } else {
        this.extraChargeStatus = true;
      }

      if (this.rides.promocode === null) {
         this.appliedPromoCode = false;
      } else {
        this.appliedPromoCode = true;
      }


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
      console.log('Hua hUa Ha');
      this.rideService.setPaymentDetails(this.bookingId, paymentId).then(response => {
        console.log('data of payment in sql: ', response['data']);
        this.payment = JSON.parse(response.data).data;
        this.route.navigateByUrl('payment-confirmation');
      });
    };

    const cancelCallback = (error) => {
      console.log('nHua nhUa nHa');
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }



}
