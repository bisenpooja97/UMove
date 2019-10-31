import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { UpdateVehiclesComponent } from '../update-vehicles/update-vehicles.component';
import { NotificationService } from 'src/app/shared/notification.service';
import { Location } from '@angular/common';
export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-vehicle-deatils',
  templateUrl: './vehicle-deatils.component.html',
  styleUrls: ['./vehicle-deatils.component.css']
})
export class VehicleDeatilsComponent implements OnInit {
  vehicle: Vehicle;
  registrationNo: string;
  lastServiceDate: Date;
  zoneId: string;
  insuranceNo: string;
  name: string;
  category: string;
  costkm: number;
  costtime: number;
  cc: string;
  purchasedDate: Date;
  status1: string;
  chassisNumber: string;

  vehicleStatus: Status[] = [
    { value: 'Busy', viewValue: 'BUSY' },
    { value: 'Free', viewValue: 'FREE' },
    { value: 'Servicing', viewValue: 'SERVICING' },
    { value: 'Stolen', viewValue: 'STOLEN' },
    { value: 'No_More_In_Use', viewValue: 'NO MORE IN USE' }

  ];

  constructor(private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private matDialog: MatDialog,
              private notificationService: NotificationService,
              private location: Location) { }

  ngOnInit() {
    this.getVehicleDetails();

  }
  getVehicleDetails() {
    this.vehicleService.getVehicleByRegistrationNo(this.route.snapshot.paramMap.get('registrationNo')).subscribe(res => {
      this.vehicle = res.data;
      console.log('data', res.data);
      console.log(res);
      this.registrationNo = this.vehicle.registrationNo;
      this.name = this.vehicle.vehicleType.name;
      this.lastServiceDate = this.vehicle.lastServiceDate;
      // this.purchasedDate = this.vehicle.purchasedDate;
      let pd = new Date();
      pd = new Date(this.vehicle.purchasedDate);
      let pd2;
      pd2 = pd.getDate();
      pd.setDate(pd2 + 1);
      this.purchasedDate = pd;
      this.insuranceNo = this.vehicle.insuranceNo;
      this.zoneId = this.vehicle.zoneId;
      this.chassisNumber = this.vehicle.chassisNumber;
      this.cc = this.vehicle.vehicleType.vehicleCC;
      this.costkm = this.vehicle.vehicleType.costPerKm;
      this.costtime = this.vehicle.vehicleType.costPerMin;
      this.status1 = this.vehicle.status;
    });
  }

  onChange(newValue) {
    console.log(this.vehicle, newValue);
    this.vehicle.status = newValue;
    this.vehicleService.updateVehicle(this.route.snapshot.paramMap.get('registrationNo'), this.vehicle).subscribe(
      res => this.notificationService.success('status updated successfully!!!'),
      error => this.notificationService.warn('Not updated!!'),
    );
  }

  update() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.data = {
      insuranceNo: this.vehicle.insuranceNo,
      lastServiceDate: this.vehicle.lastServiceDate,
      purchasedDate: this.vehicle.purchasedDate
    };
    const dRef = this.matDialog.open(UpdateVehiclesComponent, dialogConfig);
    dRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('Back to parent', result);
        this.vehicleService.updateVehicle(this.registrationNo, result).subscribe(
          response => {
            this.notificationService.success('Vehicle details updated succesffuly');
            this.getVehicleDetails();
          },
          error => {
            this.notificationService.warn('not updated');
          }
        );
      }
    });
  }

  back() {
    this.location.back();
  }
}
