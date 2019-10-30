import { Component, OnInit, Input } from '@angular/core';
import { Fuel } from '../model/fuel';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FuelService } from './fuel.service';
import { AddFuelComponent } from './add-fuel/add-fuel.component';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {
  @Input() fuel: Fuel[];

  p = 1;
  searchText;
  message: string;
  displayCount: number;

  constructor(private fuelService: FuelService, private matDialog: MatDialog,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.getFuels();
  }

  add() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    const dRef = this.matDialog.open(AddFuelComponent, dialogConfig);

    dRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.fuelService.createFuel(result)
          .subscribe(
            response => {
              this.message = response.message;
              console.log(this.message);
              if (this.message === 'Fuel already exists') {
                this.notificationService.warn('Fuel already exists');
              } else {
                this.notificationService.success('Fuel added succesfully');
              }
              this.getFuels();
            });
      }
    });
  }

  getFuels() {
    this.fuelService.getFuel().subscribe(res => {
      if (res.count === 0 || res.count === undefined) {
        this.displayCount = 0;
      } else {
        this.fuel = res.data;
        console.log(res, 'parent');
        this.displayCount = 1;
      }
    });
  }
}
