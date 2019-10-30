import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ride } from '../model/ride';
import { PaymentDetail } from '../model/paymentdetail';
import { Payment } from '../model/payment';
import { RideService } from '../service/ride.service';
import { ToastController } from '@ionic/angular';

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
  paymentAmount: number;
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


  constructor(private rideService: RideService, private route: Router, private router: ActivatedRoute) {}

  ngOnInit() {

    this.bookingId = this.router.snapshot.paramMap.get('rideId');
    this.rideStatusPaid = false;
    this.rideStatusUnPaid = false;

    this.rideService.getBookingById(this.bookingId).then(response => {
      this.rides = JSON.parse(response.data).data;
      this.name = this.rides.rider.name;
      this.email = this.rides.rider.email;
      this.contact = 7560650799;
      this.paymentAmount = this.rides.paymentDetail.totalAmount;
      this.paymentAmount = Number(this.paymentAmount) * 100;
      if (this.rides.paymentDetail.totalExtraCharges === undefined) {
        this.extraChargeStatus = false;
      } else {
        this.extraChargeStatus = true;
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
        console.log('data of payment in sql: ', response.data);
        this.payment = JSON.parse(response.data).data;
        // this.rideService.presentToast('hahaha' + response, 3000);
      }).catch((e) => {
        // this.rideService.presentToast('hahaha' + e, 3000);
        this.route.navigateByUrl('');
      });
    };

    const cancelCallback = (error) => {
      console.log('nHua nhUa nHa');
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }



}
