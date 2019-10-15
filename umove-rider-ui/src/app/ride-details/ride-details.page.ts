import { Component, OnInit } from '@angular/core';
import { RideService } from '../service/ride.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Ride } from '../model/ride';
import { Zone } from '../model/zone';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.page.html',
  styleUrls: ['./ride-details.page.scss'],
})
export class RideDetailsPage implements OnInit {
  ride: Ride;
  sizeOfDestinationZones: number;
  destinationZone: Zone;
  destinationZoneChange: Zone;

  constructor(private rideService: RideService, private route: ActivatedRoute, private router: Router) {
    this.rideService.getRideDetailsByUserIdNStatus('786', 'started')
        .then(response => {
          console.log('Ride details: ', response);
          this.ride = JSON.parse(response.data).data;
          this.sizeOfDestinationZones = this.ride.destinationZones.length;
          this.destinationZone = this.ride.destinationZones[this.sizeOfDestinationZones - 1];
        });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.queryParams) {
        this.destinationZoneChange = this.router.getCurrentNavigation().extras.queryParams.special;
        console.log('destinationZoneChange: ', this.destinationZoneChange);
        this.rideService.changeDestinationOfUser(this.destinationZoneChange, this.ride._id).then(responseData => {
          console.log('response of change destination: ', responseData);
          this.ride = JSON.parse(responseData.data).data;
          this.sizeOfDestinationZones = this.ride.destinationZones.length;
          console.log('Size of destZone is ', this.sizeOfDestinationZones);
          this.destinationZone = this.ride.destinationZones[this.sizeOfDestinationZones - 1];
          console.log('destinationZone is ', this.destinationZone);
        });
      }
    });
  }

  // calling service method to change destination of ride
  changeDestination() {
    // Apply the URL of choose destination page
    this.router.navigateByUrl('dummy-destination-zone');
  }

  // calling service method to end a ride
  endRideRequest() {
    this.rideService.endRideRequestById(this.ride._id).then(data => {
      console.log('response of end ride: ', data);
      this.router.navigateByUrl('qrcode-generator');
    });
  }

}
