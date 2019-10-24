import { Component, OnInit, Input } from '@angular/core';
import { VehicleType } from 'src/app/model/vehicleType';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehicle-type-card',
  templateUrl: './vehicle-type-card.component.html',
  styleUrls: ['./vehicle-type-card.component.css']
})
export class VehicleTypeCardComponent implements OnInit {
  @Input() vehicleTypes: VehicleType[];
  name: object;
  costPerKm: object;
  costPerMin: object;
  url: object;

  constructor(private router: Router) { }

  ngOnInit() {
    this.name = Object.values(this.vehicleTypes)[1];
    this.costPerKm = Object.values(this.vehicleTypes)[2];
    this.costPerMin = Object.values(this.vehicleTypes)[3];
    this.url = Object.values(this.vehicleTypes)[6];
    console.log(Object.values(this.vehicleTypes));
}

ok() {
  console.log('hi');
  this.router.navigate(['types/', this.name]);
  }
}
