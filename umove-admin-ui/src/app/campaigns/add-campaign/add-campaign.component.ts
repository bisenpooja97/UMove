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
  startDate: Date;
  endDate: Date;
  promocode: string;
  discountPercent: number;

  constructor(private campaignService: CampaignsService, private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddCampaignComponent>,
              @Inject(MAT_DIALOG_DATA) data
) { }

campaignForm = this.fb.group({
  name: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
  objective: ['', [Validators.pattern('[0-9]+')]],
  startDate: ['', []],
  endDate: ['', []],
  promocode: ['', []],
  discountPercent: ['', []]
});

onClose() {
  this.campaignForm.reset();
  this.dialogRef.close();
}


  ngOnInit() {
  }

  onSubmit() {
    console.log(this.campaignForm.value);
    this.dialogRef.close(this.campaignForm.value);

}


}
