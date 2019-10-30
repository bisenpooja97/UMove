import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.css']
})
export class CampaignCardComponent implements OnInit {
  @Input() campaign;
  id: string;
  name: string;
  objective: string;
  startDate: Date;
  endDate: Date;
  promocode: string;
  discountPercent: number;
  upperBound: number;
  totalCoupons: number;
  usedCoupons: number;
  campaignStatus: string;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Campaign data is:', this.campaign);
    this.id=this.campaign.id;
    this.name = this.campaign.name;
    this.objective = this.campaign.objective;
    this.startDate = this.campaign.startDate;
    this.endDate = this.campaign.endDate;
    this.promocode = this.campaign.promocode;
    this.discountPercent = this.campaign.discountPercent;
    this.upperBound = this.campaign.upperBound;
    this.totalCoupons = this.campaign.totalCoupons;
    this.usedCoupons = this.campaign.usedCoupons;
    this.campaignStatus = this.campaign.campaignStatus;
  }

  ok() {
    console.log(this.id);
    this.router.navigate(['/campaigns/details',this.id]);
    
  }

  getColor(campaignStatus) {
    switch (campaignStatus) {
    case 'Created':
    return '#1B5E20';
    case 'Running':
    return '#FFC400';
    case 'Ended':
    return '#F44336';
}
}


  start()
  {

  }

end(){

}

}
