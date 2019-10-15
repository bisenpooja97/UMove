import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialogConfig, MatDialog, MatSnackBar } from '@angular/material';
import { Vehicle } from '../model/Vehicle';
import { VehicleService } from './vehicle.service';
import { VehicleTypeService } from '../types/vehicle-type.service';
import { VehicleType } from '../model/VehicleType';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() vehicle: Vehicle[];

  p = 1;
  searchText;

  dataSource = new MatTableDataSource();
  message: string;




  constructor(private vehicleService: VehicleService, private matDialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(res => { this.vehicle = res.data;
                                                         console.log(res, 'parent');

    } );


    return this.vehicleService.getVehicles().subscribe(res => this.dataSource.data = res.data,
  length =>  this.dataSource.data.length = length);
  }
ngAfterViewInit() {
this.dataSource.paginator = this.paginator;
}

openSnackbar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
    panelClass: ['blue-snackbar']
  });
}

add() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '40%';
  this.matDialog.open(AddVehicleComponent, dialogConfig);
  const dRef = this.matDialog.open(AddVehicleComponent, dialogConfig);

  dRef.afterClosed().subscribe(result => {
    if (result !== undefined) {
    this.vehicleService.createVehicles(result)
        .subscribe(
          response => {
          this.message = response.message;
          console.log(this.message);
          if (this.message === 'Vehicle already exists') {
            this.openSnackbar('Vehicle already exists', 'ok');
          } else {
            this.openSnackbar('Vehicle added succesfully', 'ok');
          }
          this.vehicleService.getVehicles().subscribe(res => { this.vehicle = res.data;
                                                        });

          }); }
   });

}
}










