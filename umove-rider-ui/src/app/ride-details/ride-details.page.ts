import { Component, OnInit } from '@angular/core';
import { RideService } from '../service/ride.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { Ride } from '../model/ride';
import { Zone } from '../model/zone';
import {Storage} from '@ionic/storage';
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
  key = 'details';

  constructor(private rideService: RideService, private route: ActivatedRoute, private router: Router, private storage: Storage) {
  }

  ngOnInit() {

    this.storage.get(this.key).then(value => {
      this.rideService.getRideDetailsByUserIdNStatus(value.id, 'Started')
          .then(response => {
            console.log('Ride details: ', response);
            this.ride = JSON.parse(response.data).data;
            this.sizeOfDestinationZones = this.ride.destinationZones.length;
            this.destinationZone = this.ride.destinationZones[this.sizeOfDestinationZones - 1];
          });
    });
    this.route.queryParams.subscribe(params => {
      console.log('params', params);
      if (this.router.getCurrentNavigation().extras.state) {
        this.destinationZoneChange = this.router.getCurrentNavigation().extras.state.dropZone;
        console.log('Changed Destination Zone', this.destinationZoneChange);
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
    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.queryParams) {
    //     this.destinationZoneChange = this.router.getCurrentNavigation().extras.queryParams.specials;
    //     console.log('destinationZoneChange: ', this.destinationZoneChange);
    //
    //   }
    // });
  }

  // calling service method to change destination of ride
  changeDestination() {
    const navigationExtras: NavigationExtras = {
      state: {
          page: 'change-drop'
      }
    };
    this.router.navigate(['drop'], navigationExtras);
    // Apply the URL of choose destination page
  }

  // calling service method to end a ride
  endRideRequest() {
      this.router.navigateByUrl('qrcode-generator');
  }

}
