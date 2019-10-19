import { Component, OnInit, Input } from '@angular/core';
import { VehicleType } from 'src/app/model/VehicleType';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehicle-type-card',
  templateUrl: './vehicle-type-card.component.html',
  styleUrls: ['./vehicle-type-card.component.css']
})
export class VehicleTypeCardComponent implements OnInit {
  @Input() vehicleTypes: VehicleType[];
  name: object;
  costkm: object;
  costtime: object;


  constructor(private router: Router) { }

  ngOnInit() {
    this.name = Object.values(this.vehicleTypes)[1];
    this.costkm = Object.values(this.vehicleTypes)[2];
    this.costtime = Object.values(this.vehicleTypes)[3];




}

ok() {
  console.log('hi');
  this.router.navigate(['types/', this.name]);
  }
}
