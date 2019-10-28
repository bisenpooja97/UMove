import { Component, OnInit } from '@angular/core';
import { Fuel } from 'src/app/model/fuel';
import { FuelService } from '../fuel.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UpdateFuelComponent } from '../update-fuel/update-fuel.component';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-fuel-details',
  templateUrl: './fuel-details.component.html',
  styleUrls: ['./fuel-details.component.css']
})
export class FuelDetailsComponent implements OnInit {
  fuel: Fuel;
  name: string;
  fuelCost: number;

  constructor(private fuelService: FuelService,
              private route: ActivatedRoute,
              private matDialog: MatDialog,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.getFueletails();
  }

  getFueletails() {
    this.fuelService.getFuelByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
      this.fuel = res.data;
      console.log('data', res.data);
      console.log(res);
      this.name = this.fuel.name;
      this.fuelCost = this.fuel.fuelCost;
    });
  }

  update() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      fuelCost: this.fuel.fuelCost,
    };
    const dRef = this.matDialog.open(UpdateFuelComponent, dialogConfig);
    dRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('Back to parent', result);
        this.fuelService.updateFuel(this.name, result).subscribe(
          response => {
            this.notificationService.success('Fuel details updated succesffuly');
            this.getFueletails();
          },
          error => {
            this.notificationService.warn('not updated');
          }
        );
      }
    });
  }
}
