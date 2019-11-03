import { Component, OnInit, Inject } from '@angular/core';
import { CampaignsService } from '../service/campaigns.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css']
})
export class AddCampaignComponent implements OnInit {
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

  constructor(private campaignService: CampaignsService, 
    private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddCampaignComponent>,
              @Inject(MAT_DIALOG_DATA) data
) { }

campaignForm = this.fb.group({
  name: ['', []],
  objective: ['', []],
  startDate: ['', []],
  endDate: ['', []],
  expiryDate:['',[]],
  promocode: ['', [Validators.pattern('[a-zA-Z0-9_]+')]],
  discountPercent: ['', [Validators.pattern('[0-9]+')]],
  totalCoupons: ['', [Validators.pattern('[0-9]+')]],
  usedCoupons: ['', [Validators.pattern('[0-9]+')]],
  campaignStatus: ['STARTED',[]],
  maxDiscountAmount: ['',[Validators.pattern('[0-9]+')]],
  targetCustomers:  ['',[Validators.pattern('[0-9]+')]]
});

onClose() {
  this.campaignForm.reset();
  this.dialogRef.close();
}

  ngOnInit() {

}

  onSubmit() {
    console.log("form value" , this.campaignForm.value);
    this.dialogRef.close(this.campaignForm.value);

}

}
