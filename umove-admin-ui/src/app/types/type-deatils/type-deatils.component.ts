import { Component, OnInit } from '@angular/core';
import { VehicleType } from 'src/app/model/VehicleType';
import { VehicleTypeService } from '../vehicle-type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogConfig, MatSnackBar, MatDialog } from '@angular/material';
import { UpdateTypesComponent } from '../update-types/update-types.component';



@Component({
  selector: 'app-type-deatils',
  templateUrl: './type-deatils.component.html',
  styleUrls: ['./type-deatils.component.css']
})
export class TypeDeatilsComponent implements OnInit {
  type: VehicleType;
 name: string;
 // category: string;
 costPerKm: number;
 costPerMin: number;
 cc: string;
 mileage: number;
 message: string;
 fuelname: string;



 constructor(private router: Router, private vehicleTypeService: VehicleTypeService,
             private activatedRoute: ActivatedRoute, private route: ActivatedRoute,
             private snackbar: MatSnackBar, private matDialog: MatDialog) { }

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
             // this.category = this.type.category;
              this.costPerKm = this.type.costPerKm;
              this.costPerMin = this.type.costPerMin;
              this.mileage = this.type.mileage;
             });
            }

            onEdit() {

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
                costPerMin : this.type.costPerMin,
              };
              const dRef = this.matDialog.open(UpdateTypesComponent, dialogConfig);
              dRef.afterClosed().subscribe(result => {
                console.log('Back to parent', result);
                this.vehicleTypeService.updateVehicleType(this.name, result).subscribe(
                  response => {
                                this.openSnackbar('Cost updated succesffuly', 'ok');
                                this.getVehicleTypeDetails();

                                                                },
                                                                error => {
                                                                  console.log('not updated');
                                                                }

                                                                );
                                                              });



            }
            }








