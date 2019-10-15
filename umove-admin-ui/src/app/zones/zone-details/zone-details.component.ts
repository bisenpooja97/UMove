import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ZoneService } from '../service/zone.service';
import { Zone } from 'src/app/model/zone';
import { NotificationService } from 'src/app/shared/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UpdateZonesComponent } from '../update-zones/update-zones.component';
import { AddSupervisorComponent } from '../add-supervisor/add-supervisor.component';

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

  zoneStatus: Status[] = [
    { value: 'INACTIVE', viewValue: 'INACTIVE' },
    { value: 'ACTIVE', viewValue: 'ACTIVE' },
    { value: 'UNDER_MAINTAINANCE', viewValue: 'UNDER_MAINTAINANCE' },
    { value: 'FULL', viewValue: 'FULL' },
  ];


  constructor(private router: Router, private zoneService: ZoneService,
              private activatedRoute: ActivatedRoute, private route: ActivatedRoute,
              private notificationService: NotificationService,
              private matDialog: MatDialog) { }

  ngOnInit() {
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
    this.name = this.zone[0].name;
    this.city = this.zone[0].city;
    this.country = this.zone[0].country;
    this.locality = this.zone[0].locality;
    this.creationTime = this.zone[0].createdAt;
    this.state = this.zone[0].state;
    this.pincode = this.zone[0].pincode;
    this.capacity = this.zone[0].capacity;
    this.status = this.zone[0].status;
  });
}
}
