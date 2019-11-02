import { Component, OnInit, Input, Output } from '@angular/core';
import { ZoneService } from './service/zone.service';
import { Zone } from '../model/zone';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { NotificationService } from '../shared/notification.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  @Input() zones: Zone[];
  @Output() p = 1;
  message: string;
  displayCount: number;

  constructor(private zoneService: ZoneService, private matDialog: MatDialog,
              private notificationService: NotificationService,
              private location: Location) { }

  ngOnInit() {
    this.getZonesInfo();
  }

  add() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    const dRef = this.matDialog.open(AddZoneComponent, dialogConfig);
    dRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.zoneService.createZone(result)
          .subscribe(
            response => {
              this.message = response.message;
              if (this.message === 'Zone name is already exist!!!') {
                this.notificationService.warn('Zone name already exist!!!');
              } else if (this.message === 'Zone locality is already exist!!!') {
                this.notificationService.warn('No location found!!');
              } else {
                this.notificationService.success('Zone added successfully');
              }
              this.getZonesInfo();
            });
      }
    });
  }

  getZonesInfo() {
    return this.zoneService.getZones().subscribe(res => {
      if (res.count === undefined || res.count === 0) {
        this.displayCount = 0;
      } else {
        this.zones = res.data;
        this.displayCount = 1;
      }
    });
  }

  back() {
    this.location.back();
  }
}
