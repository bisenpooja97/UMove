import { Component, OnInit, Input } from '@angular/core';
import { VehicleType } from 'src/app/model/vehicleType';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


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
  url: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.name = Object.values(this.vehicleTypes)[1];
    this.costPerKm = Object.values(this.vehicleTypes)[2];
    this.costPerMin = Object.values(this.vehicleTypes)[3];
    this.url = `${environment.baseUrl}zoneservice/api/v1/downloadFile/${this.name}`;
    console.log(Object.values(this.vehicleTypes));
}

ok() {
  console.log('hi');
  this.router.navigate(['types/', this.name]);
  }
}
