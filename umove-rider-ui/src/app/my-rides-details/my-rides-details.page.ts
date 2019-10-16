import { Component, OnInit } from '@angular/core';
import { Ride } from 'src/model/ride';
import { BookingService } from 'src/service/booking.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-rides-details',
  templateUrl: './my-rides-details.page.html',
  styleUrls: ['./my-rides-details.page.scss'],
})
export class MyRidesDetailsPage implements OnInit {

  rides: Ride;
  bookingId: any;
  rideStatus: boolean;
  totalAmount: boolean;

  constructor(private route: ActivatedRoute, private bookingService: BookingService) {
    this.bookingId = this.route.snapshot.paramMap.get('bookingId');
    console.log(this.bookingId);

   }

  ngOnInit() {
    this.bookingService.getBookingById(this.bookingId).then(response => {
      console.log('Booking data: ', response.data);
      this.rides = JSON.parse(response.data).data;
      if (this.rides.payment.status === 'Paid') {
        this.rideStatus = false;
      } else {
        this.rideStatus = true;
      }
    });
  }

}
