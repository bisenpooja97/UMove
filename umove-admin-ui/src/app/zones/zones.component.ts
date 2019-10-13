import { Component, OnInit, Input } from '@angular/core';
import { ZoneService } from './service/zone.service';
import { Zone } from '../model/zone';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { AddZoneComponent } from './add-zone/add-zone.component';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  @Input() zones: Zone[];

  p = 1;

  dataSource = new MatTableDataSource();

  constructor(private zoneService: ZoneService,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.zoneService.getZones().subscribe(res => { this.zones = res.data;
                                                   console.log(res, 'parent');


} );
}

add() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '40%';
  this.matDialog.open(AddZoneComponent, dialogConfig);
}

}
