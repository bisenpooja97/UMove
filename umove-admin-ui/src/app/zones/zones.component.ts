import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ZoneService } from './service/zone.service';
import { Zone } from '../model/zone';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() zones: Zone[];

  p = 1;
  searchText;

  dataSource = new MatTableDataSource();

  constructor(private zoneService: ZoneService) { }

  ngOnInit() {
    this.zoneService.getZones().subscribe(res => { this.zones = res.data;
                                                   console.log(res, 'parent');


} );
    return this.zoneService.getZones().subscribe(res => this.dataSource.data = res.data,
  length =>  this.dataSource.data.length = length);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
