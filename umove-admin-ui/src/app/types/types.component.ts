import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { VehicleType } from '../model/VehicleType';
import { MatPaginator, MatTableDataSource, MatDialogConfig, MatDialog, MatSnackBar } from '@angular/material';
import { VehicleTypeService } from './vehicle-type.service';
import { AddVehicleTypeComponent } from './add-vehicle-type/add-vehicle-type.component';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() vehicleTypes: VehicleType[];
  // config: any;

  p = 1;
  searchText;
  message: string;
  public page = 0;
  public pages: Array<number>;


  dataSource = new MatTableDataSource();





  constructor(private typeService: VehicleTypeService, private matDialog: MatDialog, private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.typeService.getType().subscribe(res => {
    this.vehicleTypes = res.data;
      console.log(res, 'parent');

    });
    return this.typeService.getType().subscribe(res => this.dataSource.data = res.data,
      length => this.dataSource.data.length = length);
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
    const dRef = this.matDialog.open(AddVehicleTypeComponent, dialogConfig);

    dRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.typeService.createType(result)
          .subscribe(
            response => {
              this.message = response.message;
              console.log(this.message);
              if (this.message === 'Type already exists') {
                this.openSnackbar('Type already exists', 'ok');
              } else {
                this.openSnackbar('Type added succesfully', 'ok');
              }
              this.typeService.getType().subscribe(res => {
              this.vehicleTypes = res.data;
              });

            });
      }
    });

  }
}



