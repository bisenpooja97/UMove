import { Component, OnInit, Input, Output } from '@angular/core';
import { VehicleService } from 'src/app/vehicles/vehicle.service';
import { Vehicle } from 'src/app/model/vehicle';
import { ZoneService } from '../service/zone.service';
import { ActivatedRoute } from '@angular/router';
import { Zone } from 'src/app/model/zone';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { ZoneTypeCount } from 'src/app/model/zone-type-count';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  constructor(private vehicleService: VehicleService,
              private zoneService: ZoneService,
              private route: ActivatedRoute,
              private matDialog: MatDialog,
              private notificationService: NotificationService) { }

  count: number;
  vehicle: Vehicle[] = [];
  vehicle2: Vehicle[] = [];
  selectedVehicle: Vehicle;
  zone: Zone[];
  id: string;
  tname: string;
  tid: string;
  capacity: number;
  buttonDisable: boolean;
  zoneType: ZoneTypeCount[];
  displayCount: number;

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
          this.selectedVehicle.zoneId = this.id;
          console.log(this.selectedVehicle);
          this.vehicleService.updateVehicle(String(Object.values(result)[0]), this.selectedVehicle).subscribe(
            response => {
              this.notificationService.success('Vehicle added to zone successfully!!');
            });
          this.getZoneDetails();
          this.vDetails();
          console.log(this.vehicle);
          this.zoneService.getZoneType(this.id, this.tid).subscribe(val => {
            console.log(val);
            if (val.data === null) {
              console.log(res.count, { zoneId: this.id, typeId: this.tid, typeName: this.tname, count: 1 });
              const reqBody: ZoneTypeCount = {
                zoneId: this.id,
                typeId: this.tid,
                typeName: this.tname,
                count: 1
              };
              this.zoneService.createNew(reqBody)
                .subscribe();
            } else {
              val.data.count = val.data.count + 1;
              const reqBody: ZoneTypeCount = {
                zoneId: this.id,
                typeId: this.tid,
                typeName: this.tname,
                count: val.data.count
              };
              this.zoneService.updateZoneTypeCount(this.id, this.tid, reqBody).subscribe();
            }
          });
        });
        console.log(Object.values(result), JSON.stringify(Object.values(result)[0]));
      }
    });
  }

  vDetails() {
    this.vehicleService.getVehicles().subscribe(res => {
        res.data.filter(val => {
          if ((val.zoneId === this.id)) {
            this.displayCount = 1;
            this.vehicle.push(val);
          }
        });
        res.data.filter(val => {
          if (((val.zoneId === null)) && (
            (val.status !== 'No_More_In_Use') && (val.status !== 'Stolen') && (val.status !== 'Busy') && (val.status !== 'Servicing'))) {
            this.vehicle2.push(val);
            this.tname = val.vehicleType.name;
            this.tid = val.vehicleType.id;
            console.log(this.tid);
            console.log(this.tname);
          }
        });
    });
  }
}
