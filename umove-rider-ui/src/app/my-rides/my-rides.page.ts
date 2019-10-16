import { Component, OnInit } from '@angular/core';
import { Ride } from 'src/model/ride';
import { BookingService } from 'src/service/booking.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-my-rides',
  templateUrl: './my-rides.page.html',
  styleUrls: ['./my-rides.page.scss'],
})

export class MyRidesPage implements OnInit {
  booking: Ride[];
  userId: string;

  constructor(private bookingService: BookingService, private router: Router) {
    this.userId = '5d8bbc0da6e87d5404aa1921';
  }

  ngOnInit() {
    this.bookingService.getBookingsByUserId(this.userId).then(response => {
      console.log('Response1 : ', response.data);
      this.booking = JSON.parse(response.data).data;
      console.log('Response2 : ', this.booking);
    });
  }

  rideDetails(ride: Ride) {
    this.router.navigateByUrl('/my-rides-details/' + ride._id);
  }
}
