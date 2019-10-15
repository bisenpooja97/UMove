import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/app/model/Vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit {
  @Input() vehicle: Vehicle;
 registrationNo: string;
 status: string;
 type: string;
 category: string;

  constructor(private router: Router) { }

  ngOnInit() {
     this.registrationNo = this.vehicle.registrationNo;
     this.status = this.vehicle.status;
     this.type = this.vehicle.type.name;
     this.category=this.vehicle.type.category;
    console.log(this.vehicle.type.name);

  }

  ok() {
    console.log('hi');
    this.router.navigate(['vehicles/', this.registrationNo]);
    }
    getColor(status) {
      switch (status) {
case 'Busy':
return 'green';
case 'Free':
return 'black';
case 'Servicing':
return 'red';
case 'No_More_In_Use':
return 'gray';
case 'Stolen':
return 'gray';
}
}
}




