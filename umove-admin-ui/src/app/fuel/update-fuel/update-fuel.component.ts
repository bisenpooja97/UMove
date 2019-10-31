import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

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

get rCost() {
  return this.fuelForm.get('fuelCost');
}

fuelForm = this.fb.group({
  fuelCost: ['', [Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]],
 });

 getErrorCost() {
  return  this.rCost.hasError('pattern') ? 'Invalid cost' :
      '';
}

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
