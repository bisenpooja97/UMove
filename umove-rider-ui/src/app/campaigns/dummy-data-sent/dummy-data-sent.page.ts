import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Campaign} from '../../model/campaigns/campaign';

@Component({
  selector: 'app-dummy-data-sent',
  templateUrl: './dummy-data-sent.page.html',
  styleUrls: ['./dummy-data-sent.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class DummyDataSentPage implements OnInit {
  campaigns: Campaign;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.campaigns = this.router.getCurrentNavigation().extras.queryParams.special;
      console.log(this.campaigns);
    });
  }

  ngOnInit() {
  }

}
