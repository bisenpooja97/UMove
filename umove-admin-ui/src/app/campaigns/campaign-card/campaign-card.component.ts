import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  startDate: string;
  endDate: string;
  promocode: string;
  discountPercent: number;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Campaign data is:', this.campaign);
    this.name = this.campaign.name;
    this.objective = this.campaign.objective;
    this.startDate = this.campaign.startDate;
    this.endDate = this.campaign.endDate;
    this.promocode = this.campaign.promocode;
    this.discountPercent = this.campaign.discountPercent;

  }

  ok() {
    this.router.navigate(['/campaigns']);
  }

}
