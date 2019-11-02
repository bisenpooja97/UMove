import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignsService } from '../service/campaigns.service';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.css']
})

export class EditCampaignComponent implements OnInit {
  form: FormGroup;
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
  pc: string;
  
  constructor(public dialogRef: MatDialogRef<EditCampaignComponent>,
    private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, private campaignService: CampaignsService,
    @Inject(MAT_DIALOG_DATA) data
) { this.pc=data.promocode;
console.log(this.pc,'promocode');}

campaignForm = this.fb.group({
  
promocode: ['', [Validators.pattern('^[A-Z0-9]*$')]]
  
});

  ngOnInit() {
  }

  onClose() {
     this.campaignForm.reset();
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.campaignForm.value);
    this.dialogRef.close(this.campaignForm.value);
  }


}
