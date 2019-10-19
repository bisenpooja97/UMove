import { Component, OnInit } from '@angular/core';
import { VehicleTypeService } from '../vehicle-type.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar, MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Fuel } from 'src/app/model/Fuel';
import { FuelService } from 'src/app/fuel/fuel.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-vehicle-type',
  templateUrl: './add-vehicle-type.component.html',
  styleUrls: ['./add-vehicle-type.component.css']
})
export class AddVehicleTypeComponent implements OnInit {

  datas = [];
  fuels: Fuel[] = [];
  selectedFile: File;
  upload: any ;
  message: string;
  get rName() {
    return this.typeForm.get('name');
  }

  get Rcc() {
    return this.typeForm.get('vehiclecc');
  }

  get Rkm() {
    return this.typeForm.get('kilometer');
  }

  get Rcategory() {
    return this.typeForm.get('category');
  }
  get Rcosttime() {
    return this.typeForm.get('costtime');
  }
  get Rbasefare() {
    return this.typeForm.get('baseFare');
  }



  constructor(public dialogRef: MatDialogRef<AddVehicleTypeComponent>, private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router, private typeService: VehicleTypeService,
              private fuelService: FuelService,
              private http: HttpClient, private snackBar: MatSnackBar) {}
  baseUrl = environment.baseUrl2 + environment.typeBaseApi;

  typeForm = this.fb.group({
    name: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
    kilometer: ['', [Validators.pattern('^[0-9]*$')]],
    costtime: ['', [Validators.pattern('^[0-9]*$')]],
    vehiclecc: ['', [Validators.pattern('^[0-9]*$')]],
     baseFare: ['', [Validators.pattern('^[0-9]*$')]],
     fuel: []
  });

  getErrorType() {
    return  this.rName.hasError('pattern') ? 'Registration No  should not contain any special characters.' :
        '';
  }

  getErrorkm() {
    return  this.Rkm.hasError('pattern') ? 'Invalid Kilometer' :
        '';
  }

  getErrorCosttime() {
    return  this.Rcosttime.hasError('pattern') ? 'Invalid cost for  Time' :
        '';
  }

  getErrorCC() {
    return this.Rcc.hasError('pattern') ? 'Invalid cc' :
    '';
  }
  getErrorBaseFare() {
    return this.Rbasefare.hasError('pattern') ? 'Invalid cost for basefare' :
    '';
  }


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
   onUpload() {
     console.log('this is upload call');
     const uploadData = new FormData();
     uploadData.append('file', this.selectedFile, this.selectedFile.name);
    //  this.http; is; the; injected; HttpClient;
     this.http.post(this.baseUrl + '/uploadFile?id=12', uploadData)
       .subscribe(event => {
           console.log('response', event); // handle event here
        });
  }

  onClose() {
    this.typeForm.reset();
    this.dialogRef.close();
  }

  getFuelList() {
    this.fuelService.getFuel().subscribe(
      res => {
        this.fuels = res.data;
        console.log('types list: ', this.fuels);
      }

    );
  }




  onSubmit() {
    this.onUpload();
    console.log(this.typeForm.value);
    console.log(this.typeForm.value, 'child');
    this.dialogRef.close(this.typeForm.value);
}

  ngOnInit() {
    this.getFuelList();
  }

  openSnackbar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['blue-snackbar']
    });
  }
}

