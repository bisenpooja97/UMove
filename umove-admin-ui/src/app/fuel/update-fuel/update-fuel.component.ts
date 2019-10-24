import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-fuel',
  templateUrl: './update-fuel.component.html',
  styleUrls: ['./update-fuel.component.css']
})
export class UpdateFuelComponent implements OnInit {
  fuelCost: number;

  constructor(public dialogRef: MatDialogRef<UpdateFuelComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) data) {
                this.fuelCost = data.fuelCost;
}

fuelForm = this.fb.group({
  fuelCost: ['']
 });

 onClose() {
  this.dialogRef.close();
}

onSubmit() {
  console.log(this.fuelForm.value);
  this.dialogRef.close(this.fuelForm.value);
}

  ngOnInit() {
  }

}
