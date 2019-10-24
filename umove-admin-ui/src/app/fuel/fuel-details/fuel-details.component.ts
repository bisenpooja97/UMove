import { Component, OnInit } from '@angular/core';
import { Fuel } from 'src/app/model/Fuel';
import { FuelService } from '../fuel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { UpdateFuelComponent } from '../update-fuel/update-fuel.component';

@Component({
  selector: 'app-fuel-details',
  templateUrl: './fuel-details.component.html',
  styleUrls: ['./fuel-details.component.css']
})
export class FuelDetailsComponent implements OnInit {
 fuel: Fuel;
 name: string;
 fuelCost: number;


 constructor(private router: Router, private fuelService: FuelService,
             private activatedRoute: ActivatedRoute, private route: ActivatedRoute,
             private snackbar: MatSnackBar,  private matDialog: MatDialog) { }

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

    openSnackbar(message: string, action: string) {
      this.snackbar.open(message, action, {
        duration: 2000,
        panelClass: ['blue-snackbar']
      });
    }





update() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {
    fuelCost : this.fuel.fuelCost,

  };
  const dRef = this.matDialog.open(UpdateFuelComponent, dialogConfig);
  dRef.afterClosed().subscribe(result => {
    if (result !== undefined) {
    console.log('Back to parent', result);
    this.fuelService.updateFuel(this.name, result).subscribe(
      response => {
                    this.openSnackbar('Fuel details updated succesffuly', 'ok');
                    this.getFueletails();

                                                    },
                                                    error => {
                                                      this.openSnackbar('not updated', 'ok');
                                                    }

                                                    );
                                                  }
                                                  });



}

}
