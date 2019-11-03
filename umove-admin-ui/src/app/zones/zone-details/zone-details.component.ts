import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ZoneService } from '../service/zone.service';
import { Zone } from 'src/app/model/zone';
import { NotificationService } from 'src/app/shared/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UpdateZonesComponent } from '../update-zones/update-zones.component';
import { VehicleService } from 'src/app/vehicles/vehicle.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrls: ['./zone-details.component.css']
})
export class ZoneDetailsComponent implements OnInit {

  zone: Zone[];
  name: string;
  city: string;
  country: string;
  locality: string;
  creationTime: Date;
  state: string;
  pincode: number;
  capacity: number;
  status: string;
  id: string;
  count = 0;

  zoneStatus: Status[] = [
    { value: 'INACTIVE', viewValue: 'INACTIVE' },
    { value: 'ACTIVE', viewValue: 'ACTIVE' },
    { value: 'INMAINTAINANCE', viewValue: 'INMAINTAINANCE' },
    { value: 'FULL', viewValue: 'FULL' },
  ];


  constructor(private router: Router, private zoneService: ZoneService,
              private activatedRoute: ActivatedRoute, private route: ActivatedRoute,
              private notificationService: NotificationService,
              private matDialog: MatDialog,
              private vehicleService: VehicleService,
              private spinner: NgxSpinnerService,
              private location: Location) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
    this.route.queryParams.subscribe(params => {
      this.count = params.count;
  });
    this.getZoneDetails();
  }


  onChange(newValue) {
    console.log(this.zone[0], newValue);
    this.zone[0].status = newValue;
    this.zoneService.updateZones(this.route.snapshot.paramMap.get('name'), this.zone[0]).subscribe(
      response => this.notificationService.success('Zone updated successfully!!'),
      error => this.notificationService.warn('Can\'t update '),

    );
}

update() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '40%';
  dialogConfig.data = {
    capacity : this.zone[0].capacity,
  };
  const dRef = this.matDialog.open(UpdateZonesComponent, dialogConfig);
  dRef.afterClosed().subscribe(result => {
    if (result !== undefined) {
    this.zoneService.updateZones(this.name, result).subscribe(
      response => { this.notificationService.success('Zone updated successfully!!'),
      this.getZoneDetails();
    },
    error => {
      this.notificationService.warn('Can\'t update ');
    }
    );
  }
});

}
getZoneDetails() {
  this.zoneService.getZoneByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
    this.zone = res.data;
    console.log(res);
    this.id = this.zone[0].id;
    this.name = this.zone[0].name;
    this.city = this.zone[0].city;
    this.country = this.zone[0].country;
    this.locality = this.zone[0].locality;
    this.creationTime = this.zone[0].createdAt;
    this.state = this.zone[0].state;
    this.pincode = this.zone[0].pincode;
    this.capacity = this.zone[0].capacity;
    this.status = this.zone[0].status;

    // this.count = this.getVehiclesDetails();
    console.log(this.count);
    if (this.count >= this.capacity) {
    this.zone[0].status = 'FULL';
    this.zoneService.updateZones(this.route.snapshot.paramMap.get('name'), this.zone[0]).subscribe(
      response => this.notificationService.success('Zone updated successfully!!'),
      error => this.notificationService.warn('Can\'t update '),

    );
  }
  });
}

getColor(status) {
  switch (status) {
case 'ACTIVE':
return '#1B5E20';
case 'INACTIVE':
return '#FFC400';
case 'FULL':
return '#F44336';
case 'INMAINTAINANCE':
return '#6D4C41';
}
}

back() {
  this.location.back();
}
}
