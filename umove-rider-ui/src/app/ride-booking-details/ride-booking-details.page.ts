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
  destinationZone: Zone;
  timerTime: number;
  timerSettings: MbscTimerOptions;

  constructor(private rideService: RideService, private router: Router, private route: ActivatedRoute,
              private configurationService: ConfigurationService) {
  }

  ngOnInit() {

    this.configurationService.getConfigurationDetailsByName('autocancelTime')
      .then(response => {
        console.log('Configuration details: ', response);
        this.configuration = JSON.parse(response.data).data;
        console.log(this.configuration);
        this.timerTime = this.configuration.value * 60;
        console.log('Auto cancel time is ', this.timerTime);
        console.log('It will enter timer settings');
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

    this.rideService.getRideDetailsByUserIdNStatus('786', 'Confirmed')
      .then(response => {
        console.log('Booking details: ', response);
        this.ride = JSON.parse(response.data).data;
        console.log(this.ride);
      });
  }

  timerFinished() {
    this.rideService.cancelRideById(this.ride._id).then(data => {
      console.log('response of cancel ride: ', data);
    });
    mobiscroll.alert({
      title: 'Your ride is autocancelled',
      message: 'Please book a new ride.',
      callback: () => {
        // Apply the url of payment details page
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
