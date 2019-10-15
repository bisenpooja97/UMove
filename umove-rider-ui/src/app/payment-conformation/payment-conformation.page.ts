import { Component, OnInit } from '@angular/core';
import { PaymentDetails } from 'src/model/paymentdetail';
import { RideService } from 'src/service/ride.service';

@Component({
  selector: 'app-payment-conformation',
  templateUrl: './payment-conformation.page.html',
  styleUrls: ['./payment-conformation.page.scss'],
})
export class PaymentConformationPage implements OnInit {
  payment: PaymentDetails;
  constructor(private rideService: RideService) {
    this.rideService.getPaymentDetailsByBookingId('5da468f908813b0001892b5a').then(response =>{
      this.payment = JSON.parse(response.data).data;
    });
  }

  ngOnInit() {
  }

}
