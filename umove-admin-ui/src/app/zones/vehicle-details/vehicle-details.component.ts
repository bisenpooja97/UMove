import { Component, OnInit, Input, Output } from '@angular/core';
import { VehicleService } from 'src/app/vehicles/vehicle.service';
import { Vehicle } from 'src/app/model/Vehicle';
import { ZoneService } from '../service/zone.service';
import { ActivatedRoute } from '@angular/router';
import { Zone } from 'src/app/model/zone';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';
import { MatDialogConfig, MatDialog } from '@angular/material';

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
              private matDialog: MatDialog) { }

  ngOnInit() {
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
      console.log(this.count < this.capacity, this.capacity);
      if (this.count < this.capacity) {
        this.buttonDisable = false;
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
        this.vehicleService.getVehicleByRegistrationNo(String(Object.values(result)[0])).subscribe( res => {
            this.selectedVehicle = res.data;
            this.selectedVehicle.zoneid = this.id;
            console.log(this.selectedVehicle);
            this.vehicleService.updateVehicle(String(Object.values(result)[0]), this.selectedVehicle).subscribe();
            console.log(Object.values(result), JSON.stringify(Object.values(result)[0]));
            this.vDetails();

     });
    }
          });

  }

  vDetails() {
    this.vehicleService.getVehicles().subscribe(res => {
      res.data.filter(val => {
        if (val.zoneid === this.id) {
          this.vehicle.push(val);
        }
      });
      res.data.filter(val => {
        // console.log(val.zoneid, this.id);
        if (val.zoneid === null) {
          // this.vehicle2 = val;
          this.vehicle2.push(val);
          console.log(this.vehicle);
        }
        console.log(this.vehicle);
          });
} );
  }

}
