import { Component, OnInit, Input, Output } from '@angular/core';
import { VehicleService } from 'src/app/vehicles/vehicle.service';
import { Vehicle } from 'src/app/model/Vehicle';
import { ZoneService } from '../service/zone.service';
import { ActivatedRoute } from '@angular/router';
import { Zone } from 'src/app/model/zone';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  count: number;
  vehicle: Vehicle[] = [];
  vehicle2: Vehicle[] = [];
  selectedVehicle: Vehicle;
  zone: Zone[];
  id: string;
  capacity: number;
  buttonDisable: boolean;
 constructor(private vehicleService: VehicleService,
             private zoneService: ZoneService,
             private route: ActivatedRoute,
             private matDialog: MatDialog,
             private notificationService: NotificationService) { }

  ngOnInit() {
    this.buttonDisable = false;
    this.route.queryParams.subscribe(params => {
      this.count = params.count;
    });
    this.getZoneDetails();
    this.vDetails();
  }

  getZoneDetails() {
    this.zoneService.getZoneByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
      this.zone = res.data;
      console.log(res);
      this.id = this.zone[0].id;
      this.capacity = this.zone[0].capacity;
      if ((this.count > this.capacity) || (this.zone[0].status === 'INACTIVE') || (this.zone[0].status === 'INMAINTAINANCE')
        || (this.zone[0].status === 'FULL')) {
        this.buttonDisable = true;
      }
    });
  }

  add() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      vehicle: this.vehicle2,
      zId: this.id
    };
    const dRef = this.matDialog.open(AddVehicleComponent, dialogConfig);

    dRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.vehicleService.getVehicleByRegistrationNo(String(Object.values(result)[0])).subscribe(res => {
          this.selectedVehicle = res.data;
          this.selectedVehicle.zoneid = this.id;
          console.log(this.selectedVehicle);
          this.vehicleService.updateVehicle(String(Object.values(result)[0]), this.selectedVehicle).subscribe(
            response => { this.notificationService.success('Vehicle added to zone successfully!!');
            });
          console.log(Object.values(result), JSON.stringify(Object.values(result)[0]));
        });
      }
      this.getZoneDetails();
      this.vDetails();
    });
  }

  vDetails() {
    this.vehicleService.getVehicles().subscribe(res => {
      res.data.filter(val => {
        if ((val.zoneid === this.id)) {
          this.vehicle.push(val);
        }
      });
      res.data.filter(val => {
        if (((val.zoneid === null) || (val.zoneid !== this.id)) && (
       (val.status !== 'No_More_In_Use') && (val.status !== 'Stolen') && (val.status !== 'Busy') && (val.status !== 'Servicing'))) {
          this.vehicle2.push(val);
       }
      });
    });
  }
}
