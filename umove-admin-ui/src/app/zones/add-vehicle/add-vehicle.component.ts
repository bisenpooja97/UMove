import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddSupervisorComponent } from '../add-supervisor/add-supervisor.component';
import { Vehicle } from 'src/app/model/Vehicle';
import { VehicleService } from 'src/app/vehicles/vehicle.service';
import { ZoneService } from '../service/zone.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicle: Vehicle[];
  myControl = new FormControl();
  options: Vehicle[] = [];
  zId: string;
  cNo: string;
  selectedVehicle;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddSupervisorComponent>,
              private vehicleService: VehicleService,
              private zoneService: ZoneService,
              private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) data) {
                  this.vehicle = data.vehicle;
                  this.options = data.vehicle;
                  this.zId = data.zId;
              }
              vehicleForm = this.fb.group({
                rNo: ['']
              });

  ngOnInit() {

    this.vehicleService.getVehicles().subscribe(res => {
        this.vehicle = res.data;
} );
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.vehicleForm.value.rNo = Object.values(this.selectedVehicle)[2];
    this.dialogRef.close(this.vehicleForm.value);
  }

  selectedclient(event) {
    this.selectedVehicle = event.option.value;
    console.log(Object.values(this.selectedVehicle));
  }

  getOptionText(option) {
    return option.registrationNo;
  }
}
