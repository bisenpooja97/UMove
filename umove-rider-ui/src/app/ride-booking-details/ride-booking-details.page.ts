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

  timerSettings: MbscTimerOptions = {
    display: 'inline',
    targetTime: 1200,
    maxWheel: 'minutes',
    minWidth: 100,
    autostart: true,
    buttons: []
  };

  constructor(private rideService: RideService, private router: Router, private route: ActivatedRoute) {
    // Subscribing bookingService method to get booking details by its id
    this.rideService.getRideDetailsByUserIdNStatus('786', 'Confirmed')
      .then(response => {
        console.log('Booking details: ', response);
        this.ride = JSON.parse(response.data).data;
        console.log(this.ride);
        // this.sizeOfDestinationZones = this.ride.destinationZones.length;
        // console.log(this.sizeOfDestinationZones);
        // this.destinationZone = this.ride.destinationZones[this.sizeOfDestinationZones - 1];
        // console.log('destinationZone is ', this.destinationZone);
      });
  }

  ngOnInit() {
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

  startRide() {
    this.timerRef.instance.reset();
    this.router.navigateByUrl('qrcode-scanner');
    // this.rideService.startRideById(this.ride.rideId, this.vehicleNumber).subscribe(data => {
    //   console.log('response of start ride: ', data);
    //   this.router.navigateByUrl('ride-details');
    // });
  }

  cancelRide() {
    this.timerRef.instance.reset();
    this.rideService.cancelRideById(this.ride._id).then(data => {
      console.log('response of cancel ride: ', data);
      this.router.navigateByUrl('');
    });
  }

}
