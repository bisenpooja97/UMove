import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/app/model/Vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit {
  @Input() vehicle: Vehicle[];
 registrationNo: object;
 status: object;
 type: object;

  constructor(private router: Router) { }

  ngOnInit() {
    this.registrationNo = Object.values(this.vehicle)[2];
    this.status = Object.values(this.vehicle)[4];
    this.type = Object.values(this.vehicle)[5];
    console.log(this.vehicle);
  }

  ok() {
    console.log('hi');
    this.router.navigate(['vehicles/', this.registrationNo]);
    }
    getColor(status) {
      switch (status) {
case 'Busy':
return 'green';
case 'FREE':
return 'cyan';
case 'SERVICING':
return 'red';
case 'NO_MORE_IN_USE':
return 'gray';
case 'STOLEN':
return 'gray';
}
}
}




