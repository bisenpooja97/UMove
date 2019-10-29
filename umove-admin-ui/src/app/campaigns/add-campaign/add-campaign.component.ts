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
  name: string;
  objective: string;
  startDate: string;
  endDate: string;
  promocode: string;
  discountPercent: number;
  upperBound: number;
  totalCoupons: number;
  usedCoupons: number;

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
  promocode: ['', [Validators.pattern('[A-Z0-9]+')]],
  discountPercent: ['', [Validators.pattern('[0-9]+')]],
  upperBound: ['', [Validators.pattern('[0-9]+')]],
  totalCoupons: ['', [Validators.pattern('[0-9]+')]],
  usedCoupons: ['', [Validators.pattern('[0-9]+')]]
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
