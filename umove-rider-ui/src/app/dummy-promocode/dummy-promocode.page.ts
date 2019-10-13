import { Component, OnInit } from '@angular/core';
import {RideService} from "../service/ride.service";
import {NavigationExtras, Router} from "@angular/router";
import {Campaign} from "../model/campaign";

@Component({
  selector: 'app-dummy-promocode',
  templateUrl: './dummy-promocode.page.html',
  styleUrls: ['./dummy-promocode.page.scss'],
})
export class DummyPromocodePage implements OnInit {

    selectedPromocode: Campaign;

  constructor(private rideService: RideService, private router: Router) { }

  ngOnInit() {
      this.selectedPromocode = {
          campaignId: '5d8c7a62adfffb7e746ccee8',
          promocode : 'SEPT100',
          discount : 100
      };
  }

    selectDummyPaymentMethod() {
        let navigationExtras: NavigationExtras = {
            state: {
                selectedPromocode: this.selectedPromocode
            }
        };
        this.router.navigateByUrl('confirm-ride-detail', navigationExtras);
    }
}
