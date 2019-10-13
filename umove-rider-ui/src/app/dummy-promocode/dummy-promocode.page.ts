import { Component, OnInit } from '@angular/core';
import {RideService} from "../service/ride.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dummy-promocode',
  templateUrl: './dummy-promocode.page.html',
  styleUrls: ['./dummy-promocode.page.scss'],
})
export class DummyPromocodePage implements OnInit {

  constructor(private rideService: RideService, private router: Router) { }

  ngOnInit() {
  }

    selectDummyPaymentMethod() {
        let ride = this.rideService.getCurrentBooking();
        ride.promocode = {
          campaignId: '5d8c7a62adfffb7e746ccee8',
          promoCode : 'SEPT100',
          discount : 100
        };
        this.rideService.setCurrentBooking(ride);
        this.router.navigateByUrl('confirm-ride-detail');
    }
}
