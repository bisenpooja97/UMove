import { Component, OnInit } from '@angular/core';
import {RideService} from '../service/ride.service';
import {NavigationExtras, Router} from '@angular/router';
import {PaymentMethod} from '../model/payment-method';

@Component({
  selector: 'app-dummy-payment-method',
  templateUrl: './dummy-payment-method.page.html',
  styleUrls: ['./dummy-payment-method.page.scss'],
})
export class DummyPaymentMethodPage implements OnInit {

    selectedPaymentMethod: PaymentMethod;

  constructor(private rideService: RideService, private router: Router) { }

  ngOnInit() {
      this.selectedPaymentMethod = {
          _id: '5d8c7a62adfffb7e746ccee8',
          paymentMethodNumber: '7727084821',
          paymentType : 'Wallet',
          paymentProvider: 'Paytm'
      };
  }

    selectDummyPaymentMethod() {
        const navigationExtras: NavigationExtras = {
            state: {
                selectedPaymentMethod: this.selectedPaymentMethod
            }
        };

        this.router.navigateByUrl('confirm-ride-detail', navigationExtras);
    }
}
