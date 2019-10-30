import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {CampaignService} from '../../service/campaign-service/campaign.service';
import {HTTP} from '@ionic-native/http/ngx';
import {Campaign} from '../../model/campaigns/campaign';

@Component({
    selector: 'app-show-campaigns-list',
    templateUrl: './show-campaigns-list.page.html',
    styleUrls: ['./show-campaigns-list.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ShowCampaignsListPage implements OnInit {

    public campaigns: Campaign;
    public disableButton: boolean;

    constructor(private http: HTTP, private router: Router, private campaignService: CampaignService,  private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            const state = this.router.getCurrentNavigation().extras.state;
            if (state) {
                if (state.selectedPromocode !== '') {
                    this.disableButton = true;
                } else {
                    this.disableButton = false;
                }
                this.disableButton = this.disableButton;
            }
        });
    }

    ngOnInit() {
        this.disableButton = !this.disableButton;
        // this.disableButton = false;

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
        // console.log(data);
        const navigationExtras: NavigationExtras = {
            state: {
                selectedPromocode: data
            }
        };
        this.router.navigateByUrl('/confirm-ride-detail', navigationExtras);
    }
}
// for ConfirmRide
// gotoCampaigns() {
//         this.disableButton = true;
//         const navigationExtras: NavigationExtras = {
//             state: {
//                 selectedPromocode: this.disableButton
//             }
//         };
//         this.router.navigateByUrl('/campaigns', navigationExtras);
//     }
