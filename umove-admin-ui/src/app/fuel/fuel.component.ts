import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Fuel } from '../model/Fuel';
import { MatPaginator, MatTableDataSource, MatDialog, MatSnackBar, MatDialogConfig } from '@angular/material';
import { FuelService } from './fuel.service';
import { AddFuelComponent } from './add-fuel/add-fuel.component';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() fuel: Fuel[];

  p = 1;
  searchText;

  dataSource = new MatTableDataSource();
  message: string;


  constructor(private fuelService: FuelService, private matDialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fuelService.getFuel().subscribe(res => { this.fuel = res.data;
                                                  console.log(res, 'parent');

    } );
    return this.fuelService.getFuel().subscribe(res => {
      this.fuel = res.data;
    });
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
          this.matDialog.open(AddFuelComponent, dialogConfig);
          const dRef = this.matDialog.open(AddFuelComponent, dialogConfig);

          dRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
            this.fuelService.createFuel(result)
                .subscribe(
                  response => {
                  this.message = response.message;
                  console.log(this.message);
                  if (this.message === 'Fuel already exists') {
                    this.openSnackbar('Fuel already exists', 'ok');
                  } else {
                    this.openSnackbar('Fuel added succesfully', 'ok');
                  }
                  this.fuelService.getFuel().subscribe(res => { this.fuel = res.data;
                                                                });

                  }); }
           });

        }
        }


