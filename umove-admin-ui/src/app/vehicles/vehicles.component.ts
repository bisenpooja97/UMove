import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Vehicle } from '../model/Vehicle';
import { VehicleService } from './vehicle.service';
import { VehicleTypeService } from '../types/vehicle-type.service';
import { VehicleType } from '../model/VehicleType';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() vehicle: Vehicle[];

  p = 1;
  searchText;

  dataSource = new MatTableDataSource();




  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(res => { this.vehicle = res.data;
      console.log(res, 'parent');

    } );


return this.vehicleService.getVehicles().subscribe(res => this.dataSource.data = res.data,
  length =>  this.dataSource.data.length = length);
  }
ngAfterViewInit() {
this.dataSource.paginator = this.paginator;
}



}
