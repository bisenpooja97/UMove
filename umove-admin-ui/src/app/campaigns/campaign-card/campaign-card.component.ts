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
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Campaign data is:', this.campaign);
    this.id=this.campaign.id;
    this.name = this.campaign.name;
    this.objective = this.campaign.objective;
    this.startDate = this.campaign.startDate;
    this.expiryDate = this.campaign.expiryDate;
    this.promocode = this.campaign.promocode;
    this.discountPercent = this.campaign.discountPercent;
    this.totalCoupons = this.campaign.totalCoupons;
    this.usedCoupons = this.campaign.usedCoupons;
    this.maximumLimit=this.campaign.maximumLimit;
    this.maxDiscountAmount=this.campaign.maxDiscountAmount;
    this.campaignStatus = this.campaign.campaignStatus;
  }

  ok() {
    console.log(this.id);
    this.router.navigate(['/campaigns/details',this.id]);
    
  }

  getColor(campaignStatus) {
    switch (campaignStatus) {
    case 'IN_PROGRESS':
    return '#1B5E20';
    case 'SUCCESS':
    return '#FFC400';
    case 'FAILURE':
    return '#F44336';
}
}

}
