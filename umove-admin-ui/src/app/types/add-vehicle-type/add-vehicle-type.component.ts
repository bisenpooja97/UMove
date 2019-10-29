import { Component, OnInit } from '@angular/core';
import { VehicleTypeService } from '../vehicle-type.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar, MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Fuel } from 'src/app/model/fuel';
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
    return this.typeForm.get('vehicleCC');
  }

  get Rkm() {
    return this.typeForm.get('mileage');
  }

  get Rcosttime() {
    return this.typeForm.get('costPerMin');
  }
  get Rbasefare() {
    return this.typeForm.get('baseFare');
  }



  constructor(public dialogRef: MatDialogRef<AddVehicleTypeComponent>, private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router, private typeService: VehicleTypeService,
              private fuelService: FuelService,
              private http: HttpClient, private snackBar: MatSnackBar) {}
  baseUrl = environment.baseUrl + environment.zoneService + environment.typeBaseApi;

  typeForm = this.fb.group({
    name: ['', [Validators.pattern('^[a-zA-Z0-9\-]*$')]],
    mileage: ['', [Validators.pattern('^[0-9]*$')]],
    costPerMin: ['', [Validators.pattern('^[0-9]*$')]],
    vehicleCC: ['', [Validators.pattern('^[0-9]*$')]],
     baseFare: ['', [Validators.pattern('^[0-9]*$')]],
     fuel: [],
     url: []
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
    console.log('', uploadData);
   //  this.http; is; the; injected; HttpClient;

    this.http.post(environment.baseUrl + environment.zoneService + '/api/v1/uploadFile?id=' + this.typeForm.value.name, uploadData)
       .subscribe(event => {
         let eventData;
         eventData = event;
         console.log('response', eventData.fileDownloadUri); // handle event here
         this.typeForm.value.url = eventData.fileDownloadUri;
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

  async onSubmit() {
    await this.onUpload();
    setTimeout(() => {
               console.log(this.typeForm.value);
               console.log(this.typeForm.value, 'child');
               this.dialogRef.close(this.typeForm.value);
            }, 2000);
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

