import { Component, OnInit, Inject } from '@angular/core';
import { FuelService } from '../fuel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-fuel',
  templateUrl: './update-fuel.component.html',
  styleUrls: ['./update-fuel.component.css']
})
export class UpdateFuelComponent implements OnInit {
  costFuel: number;


  constructor(public dialogRef: MatDialogRef<UpdateFuelComponent>,
              private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router, private fuelService: FuelService,
              @Inject(MAT_DIALOG_DATA) data) {
this.costFuel = data.costFuel;

}

fuelForm = this.fb.group({
  costFuel: ['']
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
