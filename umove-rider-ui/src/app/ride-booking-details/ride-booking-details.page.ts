import { Component, OnInit, ViewChild } from '@angular/core';
import { mobiscroll, MbscTimerOptions } from '@mobiscroll/angular';
import { RideService } from '../service/ride.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ride } from '../model/ride';
import { Zone } from '../model/zone';

@Component({
  selector: 'app-ride-booking-details',
  templateUrl: './ride-booking-details.page.html',
  styleUrls: ['./ride-booking-details.page.scss'],
})
export class RideBookingDetailsPage implements OnInit {
  @ViewChild('timerVariable', { static: false }) timerRef;
  ride: Ride;
  vehicleNumber: string;
  sizeOfDestinationZones: number;
  destinationZone: Zone;
  timerTime: number;
  timerSettings: MbscTimerOptions;

  constructor(private rideService: RideService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.rideService.getRideDetailsByUserIdNStatus('786', 'Confirmed')
      .then(response => {
        console.log('Booking details: ', response);
        this.ride = JSON.parse(response.data).data;
        console.log(this.ride);
        console.log('Auto cancel time is ', this.ride.timer);
        this.timerTime = this.ride.timer * 60;
        console.log('Auto cancel time is ', this.timerTime);
        console.log('It will enter timer settings');
        console.log('Timer time:', typeof (this.timerTime));
        this.timerSettings = {
          display: 'inline',
          maxWheel: 'minutes',
          minWidth: 100,
          autostart: true,
          buttons: [],
          targetTime: this.timerTime,
        };
        console.log('timer settings ', this.timerSettings);
      });
  }

  timerFinished() {
    this.rideService.autocancelRideById(this.ride._id).then(data => {
      console.log('response of autocancel ride: ', data);
    });
    mobiscroll.alert({
      title: 'Your ride is autocancelled',
      message: 'Please book a new ride.',
      callback: () => {
        // Apply the url of home page
        this.router.navigateByUrl('ride-booking-details');
      }
    });
  }

  // Routing to qr-scanner page
  startRide() {
    this.timerRef.instance.stop();
    this.router.navigateByUrl('qrcode-scanner');
  }

  // calling service method to cancel the ride
  cancelRide() {
    this.timerRef.instance.stop();
    this.rideService.cancelRideById(this.ride._id).then(data => {
      console.log('response of cancel ride: ', data);
      this.router.navigateByUrl('');
    });
  }

}
