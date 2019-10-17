import { Component, OnInit } from '@angular/core';
import { Ride } from 'src/model/ride';
import { RideService } from 'src/service/ride.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-rides-details',
  templateUrl: './my-rides-details.page.html',
  styleUrls: ['./my-rides-details.page.scss'],
})
export class MyRidesDetailsPage implements OnInit {

  rides: Ride;
  rideId: any;
  rideStatusPaid: boolean;
  rideStatusUnPaid: boolean;
  totalAmount: boolean;

  constructor(private route: ActivatedRoute, private rideService: RideService) {
    this.rideId = this.route.snapshot.paramMap.get('rideId');
    console.log(this.rideId);

   }

  ngOnInit() {
    this.rideService.getRidesById(this.rideId).then(response => {
      console.log('Booking data: ', response.data);
      this.rides = JSON.parse(response.data).data;
      console.log(this.rides.paymentDetail.status);
      if (this.rides.paymentDetail.status === 'Paid') {
        this.rideStatusPaid = true;
      } else {
        this.rideStatusUnPaid = true;
      }
    });
  }

}
