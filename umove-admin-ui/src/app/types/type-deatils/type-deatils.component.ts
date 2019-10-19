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
 costkm: number;
 costtime: number;
 cc: string;
 kilometer: number;
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
              this.cc = this.type.vehiclecc;
              this.fuelname = this.type.fuel.name;
             // this.category = this.type.category;
              this.costkm = this.type.costkm;
              this.costtime = this.type.costtime;
              this.kilometer = this.type.kilometer;




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
              dialogConfig.width = '20%';
              dialogConfig.data = {
                costtime : this.type.costtime,
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








