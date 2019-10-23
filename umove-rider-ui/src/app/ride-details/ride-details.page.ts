import { Component, OnInit } from '@angular/core';
import { RideService } from '../service/ride.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ride } from '../model/ride';
import { Zone } from '../model/zone';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.page.html',
  styleUrls: ['./ride-details.page.scss'],
})
export class RideDetailsPage implements OnInit {
  ride: Ride;
  rideId: string;
  sizeOfDestinationZones: number;
  destinationZone: Zone;
  destinationZoneChange: Zone;

  constructor(private rideService: RideService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.rideService.getRideDetailsByUserIdNStatus('5d8bbc0da6e87d5404aa1921', 'Started')
    .then(response => {
      console.log('Ride details: ', response);
      this.ride = JSON.parse(response.data).data;
      this.sizeOfDestinationZones = this.ride.destinationZones.length;
      this.destinationZone = this.ride.destinationZones[this.sizeOfDestinationZones - 1];
    });

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
      this.router.navigateByUrl('qrcode-generator');
  }

}
