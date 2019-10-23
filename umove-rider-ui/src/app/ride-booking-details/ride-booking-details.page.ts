import { Component, OnInit, ViewChild } from '@angular/core';
import { mobiscroll, MbscTimerOptions } from '@mobiscroll/angular';
import { RideService } from '../service/ride.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ride } from '../model/ride';
import { Zone } from '../model/zone';
import { ConfigurationService } from '../service/configuration.service';
import { Configuration } from '../model/configuration';

@Component({
  selector: 'app-ride-booking-details',
  templateUrl: './ride-booking-details.page.html',
  styleUrls: ['./ride-booking-details.page.scss'],
})
export class RideBookingDetailsPage implements OnInit {
  @ViewChild('timerVariable', { static: false }) timerRef;
  ride: Ride;
  configuration: Configuration;
  rideStatus: string;
  vehicleNumber: string;
  sizeOfDestinationZones: number;
  rideBookedAt: Date;
  destinationZone: Zone;
  timerTimeInMins: number;
  rightNow: Date;
  timerSeconds: number;
  timerSettings: MbscTimerOptions;

  constructor(private rideService: RideService, private router: Router, private route: ActivatedRoute,
              private configurationService: ConfigurationService) {
  }

  ngOnInit() {

    this.configurationService.getConfigurationDetailsByName('autocancelTime')
      .then(response1 => {
        console.log('Configuration details: ', response1);
        this.configuration = JSON.parse(response1.data).data;
        console.log(this.configuration);
        this.timerTimeInMins = this.configuration.value;
        console.log('Auto cancel time is ', this.timerTimeInMins);

        this.rideService.getRideDetailsByUserIdNStatus('786', 'Confirmed')
          .then(response2 => {
            console.log('Booking details: ', response2);
            this.ride = JSON.parse(response2.data).data;
            console.log(this.ride);
            this.rideBookedAt = new Date(this.ride.bookedAt + 'Z');
            console.log('Ride booked at ', this.rideBookedAt);
            console.log(typeof (this.rideBookedAt));
            // // this.timerTime = this.ride.timer;
            console.log('Timer time in minutes is ', this.timerTimeInMins);
            this.rideBookedAt.setMinutes(this.rideBookedAt.getMinutes() + this.timerTimeInMins);
            console.log('Autocancel time is ', this.rideBookedAt);
            this.rightNow = new Date();
            console.log('RightNow time is ', this.rightNow);
            this.timerSeconds = (this.rideBookedAt.getTime() - this.rightNow.getTime()) / 1000;
            console.log('Scanner timer', this.timerSeconds);
            console.log(this.timerSeconds);
            if (this.timerSeconds > 0) {
              this.timerSettings = {
                display: 'inline',
                targetTime: this.timerSeconds,
                maxWheel: 'minutes',
                minWidth: 100,
                autostart: true,
                buttons: []
              };
            } else {
              this.timerFinished();
            }
          });
      });
  }

  timerFinished() {
    this.rideService.cancelRideById(this.ride._id).then(data => {
      console.log('response of cancel ride: ', data);
      mobiscroll.alert({
        title: 'Your ride is autocancelled',
        message: 'Please book a new ride.',
        callback: () => {
          // Apply the url of home page
          this.router.navigateByUrl('ride-booking-details');
        }
      });
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
    this.rideService.cancelRideById(this.ride._id).then(response => {
      console.log('response of cancel ride: ', response);
      this.ride = JSON.parse(response.data).data;
      this.rideStatus = this.ride.status;
      if (this.rideStatus === 'CancelledWithinThreshold') {
        this.router.navigateByUrl('ride-booking-details');
      }
      if (this.rideStatus === 'CancelledAfterThreshold') {
        // Apply the url of payment details page
        this.router.navigateByUrl('ride-details');
      }
    });
  }

}
