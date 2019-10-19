import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CampaignService} from '../../services/campaign-service/campaign.service';
import {HTTP} from '@ionic-native/http/ngx';

@Component({
  selector: 'app-show-campaigns-list',
  templateUrl: './show-campaigns-list.page.html',
  styleUrls: ['./show-campaigns-list.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ShowCampaignsListPage implements OnInit {

  public campaigns: any = [];

  constructor(private http: HTTP, private router: Router, private campaignService: CampaignService) { }

  ngOnInit() {
    // this.campaignService.getCampaignsList()
    //     .subscribe(data => {
    //       console.log('filtered data: ', data);
    //       this.campaigns = data;
    //       console.log(this.campaigns);
    //     });
      console.log('im here');
      this.campaignService.getCampaignsList()
          .then(data => {
              console.log('filtered data: ', data);
              this.campaigns = JSON.parse(data.data).data;
              // console.log('hello', this.campaigns);
          }).catch(error => {

            console.log(error);
            // console.log(error.error); // error message as string
            // console.log(error.headers);

          });
  }

  sendCampaign(data) {
    console.log(data);
    // const navigationExtras: NavigationExtras = {
    //       queryParams: {
    //           special: data
    //       }
    //   };
    // // pass Your page url HERE
    // this.router.navigateByUrl('/update-kyc', navigationExtras);
  }
}
