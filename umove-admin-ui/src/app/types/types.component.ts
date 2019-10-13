import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { VehicleType } from '../model/VehicleType';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { VehicleTypeService } from './vehicle-type.service';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() vehicleTypes: VehicleType[];

  p = 1;
  searchText;

  dataSource = new MatTableDataSource();





  constructor(private typeService: VehicleTypeService) { }

  ngOnInit() {
    this.typeService.getType().subscribe(res => { this.vehicleTypes = res.data;
                                                  console.log(res, 'parent');

                                                } );
    return this.typeService.getType().subscribe(res => this.dataSource.data = res.data,
                                              length =>  this.dataSource.data.length = length);
                                              }
ngAfterViewInit() {
                    this.dataSource.paginator = this.paginator;
                  }



}
