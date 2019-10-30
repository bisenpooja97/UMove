import { Component, OnInit } from '@angular/core';
import { VehicleType } from 'src/app/model/vehicleType';
import { VehicleTypeService } from '../vehicle-type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogConfig, MatSnackBar, MatDialog } from '@angular/material';
import { UpdateTypesComponent } from '../update-types/update-types.component';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-type-deatils',
  templateUrl: './type-deatils.component.html',
  styleUrls: ['./type-deatils.component.css']
})

export class TypeDeatilsComponent implements OnInit {
  type: VehicleType;
  name: string;
  costPerKm: number;
  costPerMin: number;
  cc: string;
  mileage: number;
  message: string;
  fuelname: string;

  constructor(private vehicleTypeService: VehicleTypeService,
              private route: ActivatedRoute, private matDialog: MatDialog,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.getVehicleTypeDetails();
  }

  getVehicleTypeDetails() {
    this.vehicleTypeService.getVehicleByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
      this.type = res.data;
      console.log('data', res.data);
      console.log(res);
      this.name = this.type.name;
      this.cc = this.type.vehicleCC;
      this.fuelname = this.type.fuel.name;
      this.costPerKm = this.type.costPerKm;
      this.costPerMin = this.type.costPerMin;
      this.mileage = this.type.mileage;
    });
  }

  update() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.data = {
      costPerMin: this.type.costPerMin,
    };
    const dRef = this.matDialog.open(UpdateTypesComponent, dialogConfig);
    dRef.afterClosed().subscribe(result => {
      console.log('Back to parent', result);
      this.vehicleTypeService.updateVehicleType(this.name, result).subscribe(
        response => {
          this.notificationService.success('Cost updated successfully!!');
          this.getVehicleTypeDetails();
        },
        error => {
          this.notificationService.warn('not updated');
        }
      );
    });
  }
}
