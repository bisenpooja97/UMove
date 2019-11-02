import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private route: Router){ }

  startDate = new Date(2000, 0, 2);
  ngOnInit() {
  }

  barChart(){
    this.route.navigate(['report/bar-chart']);
  }
  lineChart(){
    this.route.navigate(['report/line-chart']);
  }

  bookingVehicleType() {
    this.route.navigate(['report/booking-vehicleType']);
  }

  bookingZone() {
    this.route.navigate(['report/booking-zone']);
  }
}
