import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/model/Vehicle';
import { VehicleService } from '../vehicle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatDialogConfig, MatDialog } from '@angular/material';
import { UpdateVehiclesComponent } from '../update-vehicles/update-vehicles.component';
export interface Status {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-vehicle-deatils',
  templateUrl: './vehicle-deatils.component.html',
  styleUrls: ['./vehicle-deatils.component.css']
})
export class VehicleDeatilsComponent implements OnInit {
  vehicle: Vehicle;
  registrationNo: string;
  lastServiceDate: Date;
  zoneId: string;
   insuranceNo: string;

 name: string;
 category: string;
 costkm: number;
 costtime: number;
 cc: string;
vehiclePurchased: Date;
status1: String;

vehicleStatus: Status[] = [
  { value: 'Busy', viewValue: 'BUSY' },
  { value: 'Free', viewValue: 'FREE' },
  {value: 'Servicing', viewValue: 'SERVICING'},
  {value: 'Stolen', viewValue: 'STOLEN'},
  {value: 'No_More_In_Use', viewValue: 'No More In Use'}

];



constructor(private router: Router, private vehicleService: VehicleService,
            private activatedRoute: ActivatedRoute, private route: ActivatedRoute,
            private snackbar: MatSnackBar,  private matDialog: MatDialog) { }


  ngOnInit() {
    this.getVehicleDetails();

  }
getVehicleDetails() {
  this.vehicleService.getVehicleByRegistrationNo(this.route.snapshot.paramMap.get('registrationNo')).subscribe(res => {
    this.vehicle = res.data;
    console.log('data', res.data);
    console.log(res);
    this.registrationNo = this.vehicle.registrationNo;
    this.name = this.vehicle.type.name;
    this.lastServiceDate = this.vehicle.lastServiceDate;
    this.vehiclePurchased = this.vehicle.vehiclePurchased;
    this.insuranceNo = this.vehicle.insuranceNo;
    this.zoneId = this.vehicle.zoneid;
    //this.category = this.vehicle.type.category;
    //console.log(this.category);
    this.cc = this.vehicle.type.vehiclecc;
    this.costkm = this.vehicle.type.costkm;
    this.costtime = this.vehicle.type.costtime;
    this.status1 = this.vehicle.status;




   });
  }

  onEdit() {

  }

  onChange(newValue) {
    console.log(this.vehicle, newValue);
    this.vehicle.status = newValue;
    this.vehicleService.updateVehicle(this.route.snapshot.paramMap.get('registrationNo'), this.vehicle).subscribe(

);
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
    insuranceNo : this.vehicle.insuranceNo,
    lastServiceDate: this.vehicle.lastServiceDate,
  };
  const dRef = this.matDialog.open(UpdateVehiclesComponent, dialogConfig);
  dRef.afterClosed().subscribe(result => {
    console.log('Back to parent', result);
    this.vehicleService.updateVehicle(this.registrationNo, result).subscribe(
      response => {
                    this.openSnackbar('Vehicle details updated succesffuly', 'ok');
                    this.getVehicleDetails();

                                                    },
                                                    error => {
                                                      this.openSnackbar('not updated', 'ok');
                                                    }

                                                    );
                                                  });



}






}
