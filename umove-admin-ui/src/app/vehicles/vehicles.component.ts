import { Component, OnInit, Input } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Vehicle } from '../model/vehicle';
import { VehicleService } from './vehicle.service';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  @Input() vehicle: Vehicle[];
  p = 1;
  searchText;
  message: string;
  displayCount: number;

  constructor(private vehicleService: VehicleService,
              private matDialog: MatDialog,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.getVehicles();
  }

  add() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dRef = this.matDialog.open(AddVehicleComponent, dialogConfig);

    dRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.vehicleService.createVehicles(result)
          .subscribe(
            response => {
              this.message = response.message;
              console.log(this.message);
              if (this.message === 'Vehicle already exists') {
                this.notificationService.warn('Vehicle already exists');
              } else {
                this.notificationService.success('Vehicle added succesfully');
              }
              this.getVehicles();
            });
      }
    });
  }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(res => {
      if (res.count === undefined || res.count === 0) {
        this.displayCount = 0;
      } else {
        this.vehicle = res.data;
        this.displayCount = 1;
      }
    });
  }
}
