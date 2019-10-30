import { Component, OnInit, Input } from '@angular/core';
import { Fuel } from 'src/app/model/fuel';
import { Router, ActivatedRoute } from '@angular/router';
import { FuelService } from '../fuel.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UpdateFuelComponent } from '../update-fuel/update-fuel.component';
import { NotificationService } from 'src/app/shared/notification.service';
@Component({
 selector: 'app-fuel-card',
 templateUrl: './fuel-card.component.html',
 styleUrls: ['./fuel-card.component.css']
})
export class FuelCardComponent implements OnInit {
 @Input() fuel: Fuel;
 name: string;
 fuelCost: number;

 constructor(private router: Router, private fuelService: FuelService,
             private activatedRoute: ActivatedRoute, private route: ActivatedRoute,
             private notificationService: NotificationService,  private matDialog: MatDialog) { }
 ngOnInit() {
    this.name = this.fuel.name;
    this.fuelCost = this.fuel.fuelCost;
 }
 
 update() {
   const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = true;
   dialogConfig.autoFocus = true;
   dialogConfig.width = '40%';
   dialogConfig.data = {
     fuelCost : this.fuel.fuelCost,
   };
   const dRef = this.matDialog.open(UpdateFuelComponent, dialogConfig);
   dRef.afterClosed().subscribe(result => {
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
                                                   });
 }
 getFueletails() {
   this.fuelService.getFuelByName(this.name).subscribe(res => {
     this.fuel = res.data;
     console.log('data', res.data);
     console.log(res);
     this.name = this.fuel.name;
     this.fuelCost = this.fuel.fuelCost;
    });
   }

}
