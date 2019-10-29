import { Component, OnInit } from '@angular/core';
import { VehicleType } from 'src/app/model/vehicleType';
import { VehicleTypeService } from 'src/app/types/vehicle-type.service';
import { VehicleService } from '../vehicle.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  Vehicletypes: VehicleType[];
  datas = [];

  todaydate: Date = new Date();
  message: string;


  get rNum() {
    return this.vehicleForm.get('registrationNo');
  }

  get RinsuranceNo() {
    return this.vehicleForm.get('insuranceNo');
  }

  get status() {
    return this.vehicleForm.get('status');
  }

  get Vehicletype() {
    return this.vehicleForm.get('vehicleType');
  }


  get purchasedDate() {
    return this.vehicleForm.get('purchasedDate');
  }

  get RchassisNumber() {
    return this.vehicleForm.get('chassisNumber');
  }




  constructor( public dialogRef: MatDialogRef<AddVehicleComponent>, private fb: FormBuilder, private route: ActivatedRoute,
               private router: Router, private vehicleService: VehicleService,
               private typeService: VehicleTypeService, private snackBar: MatSnackBar) { }

  vehicleForm = this.fb.group({
    registrationNo: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
    insuranceNo: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
    vehicleType: [''],
    status: 'Free',
    purchasedDate: [''],
    chassisNumber: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]]

  });

  getErrorRegistrationNo() {
    return this.rNum.hasError('pattern') ? 'Registration No  should not contain any special characters.' :
      '';
  }

  getErrorInsuranceNo() {
    return this.RinsuranceNo.hasError('pattern') ? 'Invalid insurance no' :
      '';
  }

  getErrorChassisNo() {
    return this.RchassisNumber.hasError('pattern') ? 'Invalid no' :
    '';
  }

  onClose() {
    this.vehicleForm.reset();
    this.dialogRef.close();
  }





  getTypeList() {
    this.typeService.getType().subscribe(
      res => {
        this.Vehicletypes = res.data;
        console.log('types list: ', this.Vehicletypes);
      }

    );
  }


  onSubmit() {

    console.log(this.vehicleForm.value);
    console.log(this.vehicleForm.value, 'child');
    this.dialogRef.close(this.vehicleForm.value);


}

  ngOnInit() {
    this.getTypeList();
  }
}

