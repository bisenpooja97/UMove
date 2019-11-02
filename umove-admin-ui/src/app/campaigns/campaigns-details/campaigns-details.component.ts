import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampaignsService } from '../service/campaigns.service';
import { Campaign } from '../model/campaign';
import { EditCampaignComponent } from '../edit-campaign/edit-campaign.component';
import { MatDialogConfig, MatDialog } from '@angular/material';

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-campaigns-details',
  templateUrl: './campaigns-details.component.html',
  styleUrls: ['./campaigns-details.component.css']
})

export class CampaignsDetailsComponent implements OnInit {

  campaign: Campaign;
  id: string;
  name: string;
  objective: string;
  startDate: Date;
  endDate: Date;
  expiryDate: Date;
  promocode: string;
  discountPercent: number;
  targetCustomers: number;
  achievedCustomers: number;
  maximumLimit: number;
  totalCoupons: number;
  usedCoupons: number;
  maxDiscountAmount: number;
  campaignStatus: string;


  CampaignStatus: Status[] = [
    { value: 'IN_PROGRESS', viewValue: 'IN_PROGRESS' },
    { value: 'SUCCESS', viewValue: 'SUCCESS' },
    { value: 'FAILURE', viewValue: 'FAILURE' },
  ];
  
  constructor(private router: Router, private campaignService: CampaignsService,
              private activatedRoute: ActivatedRoute, private route: ActivatedRoute,
              private matDialog: MatDialog) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ParamMap id', this.id);
    this.campaignService.getCampaignsById(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.campaign= res.data;
      console.log('Response hello', typeof(res.data), res.data);
  })
  }

  edit()
  {
       const dialogConfig = new MatDialogConfig();
       dialogConfig.disableClose = true;
       dialogConfig.autoFocus = true;
       dialogConfig.width = '40%';
       dialogConfig.data = {
        promocode : this.campaign,
      };

  const dRef = this.matDialog.open(EditCampaignComponent, dialogConfig);
  dRef.afterClosed().subscribe(result => {
    if (result !== undefined) {
    this.campaignService.updateCampaignById(this.id,this.campaign).subscribe(
      response => { 

       },
    );
  }
});   
  }

  // start()
  // {
  //    console.log(Object.values(this.campaign));
  //   Object.values(this.campaign)[13] = Object(this.campaign);
  //   console.log(Object.values(this.campaign)[13], this.campaign);
  //   this.campaignService.updateCampaignById(this.id,this.campaign).subscribe(
  //     response => {
  //                  console.log('Call Success');
  //                  })
  // }

  onChange(newValue) {
    console.log('Campaign ', this.campaign);
     console.log(Object.values(this.campaign),Object.values(this.campaign));
     this.campaign.campaignStatus = newValue;
     console.log(this.campaign,'campaign ka status change hona chahiye');
    // console.log(this.campaign.campaignStatus, this.campaign);
    console.log('Id ',this.id);
    this.campaignService.updateCampaignById(this.id, this.campaign).subscribe(
      response => {
                  console.log('response ',response);
                   console.log('Call Success');
                   console.log('Campaign ', this.campaign);
                    // this.notificationService.success('Campaign updated successfully!!');
       //},
      // error => this.notificationService.warn(error),
    // );
});
}

}