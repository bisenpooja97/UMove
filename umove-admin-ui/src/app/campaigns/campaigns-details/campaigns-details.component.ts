import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampaignsService } from '../service/campaigns.service';
import { Campaign } from '../model/campaign';
import { EditCampaignComponent } from '../edit-campaign/edit-campaign.component';
import { MatDialogConfig } from '@angular/material';

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
  campaign: Campaign[];
  id: string;
  name: string;
  objective: string;
  startDate: Date;
  endDate: Date;
  expiredDate: Date;
  promocode: string;
  discountPercent: number;
  upperBound: number;
  totalCoupons: number;
  usedCoupons: number;
  CampaignStatus: string;

  campaignStatus: Status[] = [
    { value: 'Created', viewValue: 'Created' },
    { value: 'Running', viewValue: 'Running' },
    { value: 'Ended', viewValue: 'Ended' },
  ];


  constructor(private router: Router, private campaignService: CampaignsService,
              private activatedRoute: ActivatedRoute, private route: ActivatedRoute) { }

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

      };
    
  }

}
