import { Component, OnInit } from '@angular/core';
import {RideService} from "../service/ride.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dummy-payment-method',
  templateUrl: './dummy-payment-method.page.html',
  styleUrls: ['./dummy-payment-method.page.scss'],
})
export class DummyPaymentMethodPage implements OnInit {

  constructor(private rideService: RideService, private router: Router) { }

  ngOnInit() {
  }

    selectDummyPaymentMethod() {
        let ride = this.rideService.getCurrentBooking();
        ride.paymentMethod = {
          _id: '5d8c7a62adfffb7e746ccee8',
          paymentMethodNumber: '7727084821',
          paymentType : 'Wallet',
          paymentProvider: 'Paytm'
        };
        this.rideService.setCurrentBooking(ride);
        this.router.navigateByUrl('confirm-ride-detail');
    }
}
