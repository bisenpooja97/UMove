import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Ride } from '../model/ride';
import { RideService } from '../service/ride.service';


@Component({
  selector: 'app-my-rides',
  templateUrl: './my-rides.page.html',
  styleUrls: ['./my-rides.page.scss'],
})

export class MyRidesPage implements OnInit {
  ridedata: Ride[];
  userId: string;
  rideStatusPaid: boolean;
  rideStatusUnPaid: boolean;


  constructor(private rideService: RideService, private router: Router) {
    this.userId = '5d8bbc0da6e87d5404aa1921';
  }

  ngOnInit() {
    this.rideService.getRidesByUserId(this.userId).then(response => {
      console.log('Response1 : ', response.data);
      this.ridedata = JSON.parse(response.data).data;
      console.log('Response2 : ', this.ridedata);
    });
  }

  rideDetails(ride: Ride) {
    this.router.navigateByUrl('/my-rides-details/' + ride._id);
  }
}
