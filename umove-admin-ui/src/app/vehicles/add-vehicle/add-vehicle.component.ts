import { Component, OnInit } from '@angular/core';
import { VehicleType } from 'src/app/model/VehicleType';
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

  types: VehicleType[];
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

  get type() {
    return this.vehicleForm.get('type');
  }

  // get lastServiceDate() {
  //   return this.vehicleForm.get('lastServiceDate');
  // }

  get vehiclePurchased() {
    return this.vehicleForm.get('vehiclePurchased');
  }



  constructor( public dialogRef: MatDialogRef<AddVehicleComponent>, private fb: FormBuilder, private route: ActivatedRoute,
               private router: Router, private vehicleService: VehicleService,
               private typeService: VehicleTypeService, private snackBar: MatSnackBar) { }

  vehicleForm = this.fb.group({
    registrationNo: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
    insuranceNo: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
    type: [''],
    status: 'Free',
    // lastServiceDate: [''],
    vehiclePurchased: ['']
  });

  getErrorRegistrationNo() {
    return this.rNum.hasError('pattern') ? 'Registration No  should not contain any special characters.' :
      '';
  }

  getErrorInsuranceNo() {
    return this.RinsuranceNo.hasError('pattern') ? 'Invalid insurance no' :
      '';
  }

  onClose() {
    this.vehicleForm.reset();
    this.dialogRef.close();
  }





  getTypeList() {
    this.typeService.getType().subscribe(
      res => {
        this.types = res.data;
        console.log('types list: ', this.types);
      }

    );
  }



  // onSubmit() {
  //   console.log(this.vehicleForm.value);
  //   this.vehicleService.createVehicles(this.vehicleForm.value)
  //     .subscribe(response => {
  //       console.log('repsonse: ', response);
  //       this.message = response.message;
  //       console.log('ddd', this.message);
  //       if (this.message === 'Vehicle already exists') {
  //           this.openSnackbar('Vehicle already exists', 'ok');
  //         } else {
  //           this.openSnackbar('Vehicle added succesfully', 'ok');
  //         }
  //      // this.router.navigate(['/vehicles']);
  //         // // this.openSnackbar(this.message,'ok');

  //       });


  //   // this.router.navigateByUrl('/welcome');
  // }
  onSubmit() {

    console.log(this.vehicleForm.value);
    console.log(this.vehicleForm.value, 'child');
    this.dialogRef.close(this.vehicleForm.value);


}







  ngOnInit() {
    this.getTypeList();
  }




  openSnackbar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['blue-snackbar']
    });
  }
}

