import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-vehicles',
  templateUrl: './update-vehicles.component.html',
  styleUrls: ['./update-vehicles.component.css']
})
export class UpdateVehiclesComponent implements OnInit {
  lastServiceDate: Date;
  insuranceNo: string;
  todaydate: Date = new Date();
  purchasedDate: Date;
  minDate: Date = new Date();


  constructor(public dialogRef: MatDialogRef<UpdateVehiclesComponent>,
              private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router, private vehicleService: VehicleService,
              @Inject(MAT_DIALOG_DATA) data) {
                this.lastServiceDate = data.lastServiceDate;
                this.insuranceNo = data.insuranceNo;
                // this.vehiclePurchased = data.vehiclePurchased;
                this.minDate = new Date(data.purchasedDate);
}

get RinsuranceNo() {
  return this.vehicleForm.get('insuranceNo');
}

vehicleForm = this.fb.group({
  lastServiceDate: [''],
  insuranceNo: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
});

getErrorInsuranceNo() {
  return this.RinsuranceNo.hasError('pattern') ? 'Invalid insurance no' :
    '';
}

onClose() {
  this.dialogRef.close();
}

onSubmit() {
  console.log(this.vehicleForm.value);
  this.dialogRef.close(this.vehicleForm.value);
}


  ngOnInit() {
    console.log(this.lastServiceDate,  this.minDate);
  }

}
