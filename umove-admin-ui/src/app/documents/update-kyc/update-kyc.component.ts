import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-update-kyc',
  templateUrl: './update-kyc.component.html',
  styleUrls: ['./update-kyc.component.css']
})
export class UpdateKycComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<UpdateKycComponent>,
              @Inject(MAT_DIALOG_DATA) data) { }

              onClose() {
                this.dialogRef.close();
              }

  ngOnInit() {
  }

}
