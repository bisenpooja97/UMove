import { Component, OnInit, Input } from '@angular/core';
import { VehicleType } from '../model/vehicleType';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { VehicleTypeService } from './vehicle-type.service';
import { AddVehicleTypeComponent } from './add-vehicle-type/add-vehicle-type.component';
import { NotificationService } from '../shared/notification.service';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  @Input() vehicleTypes: VehicleType[];
  p = 1;
  searchText;
  message: string;
  public page = 0;
  public pages: Array<number>;
  displayCount: number;

  constructor(private typeService: VehicleTypeService, private matDialog: MatDialog,
              private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getTypes();
  }

  add() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    const dRef = this.matDialog.open(AddVehicleTypeComponent, dialogConfig);

    dRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.typeService.createType(result)
          .subscribe(
            response => {
              this.message = response.message;
              console.log(this.message);
              if (this.message === 'Type already exists') {
                this.notificationService.warn('Type already exists');
              } else {
                this.notificationService.success('Type added succesfully');
              }
              this.getTypes();
            });
      }
    });
  }

  getTypes() {
    this.typeService.getType().subscribe(res => {
      if (res.count === 0 || res.count === undefined) {
        this.displayCount = 0;
      } else {
        this.vehicleTypes = res.data;
        console.log(res, 'parent');
        this.displayCount = 1;
      }
    });
  }
}
