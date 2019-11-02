import { Component, OnInit } from '@angular/core';
import { Ride } from 'src/app/model/ride';

import { Router, ActivatedRoute } from '@angular/router';
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
  ride: Ride;
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


  constructor(private rideService: RideService, private route: Router, private router: ActivatedRoute) {

  }

  ngOnInit() {
    this.bookingId = this.router.snapshot.paramMap.get('rideId');
    this.rideService.getBookingById(this.bookingId).then(response => {
      this.ride = JSON.parse(response.data).data;
      console.log('ride: ', this.ride);
      this.name = this.ride.rider.name;
      this.email = this.ride.rider.email;
      this.contact = this.ride.rider.mobileNumber;
      this.paymentAmount = Number(this.ride.paymentDetail.totalAmount) * 100;
     });
  }
  // showExtraCharges(statusExtraCharge: boolean) {
  //   if (statusExtraCharge === false) {
  //   this.showExtraCharge = true;
  //   console.log(this.showExtraCharge);
  //   this.rideService.presentToast(this.showExtraCharge, 3000);
  // } else {
  //     this.showExtraCharge = false;
  //   }
  // }
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
      this.rideService.setPaymentDetails(this.bookingId, paymentId, 'Paid').then(response => {
        console.log('data of payment in sql: ', response.data);
        this.payment = JSON.parse(response.data).data;
      });
      this.rideService.presentAlert('', 'Your payment is successful.', 'Ok', () => {
        this.route.navigateByUrl('/home');
      });

    };

    const cancelCallback = (error) => {
      this.rideService.setPaymentDetails(this.bookingId, null, "Pending").then(response => {
        console.log('data of payment in sql: ', response.data);
        this.payment = JSON.parse(response.data).data;
        this.route.navigateByUrl('/confirm-ride-detail');
      });
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
}
