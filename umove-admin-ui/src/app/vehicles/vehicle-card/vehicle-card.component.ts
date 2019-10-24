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
 // category: string;

  constructor(private router: Router) { }

  ngOnInit() {
     this.registrationNo = this.vehicle.registrationNo;
     this.status = this.vehicle.status;
     this.type = this.vehicle.vehicleType.name;
   //  this.category = this.vehicle.type.category;
     console.log(this.vehicle.vehicleType.name);

  }

  ok() {
    console.log('hi');
    this.router.navigate(['vehicles/', this.registrationNo]);
  }
  getColor(status) {
    switch (status) {
      case 'Busy':
        return '#F44336';
      case 'Free':
        return '#1B5E20';
      case 'Servicing':
        return '#6D4C41';
      case 'No_More_In_Use':
        return '#FFC400';
      case 'Stolen':
        return '#757575';
    }
  }
}
