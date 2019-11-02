import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {ZoneService} from "../service/zone/zone.service";
import {Zone} from "../model/zone";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {MapService} from "../service/zone/map.service";
import {RideService} from "../service/ride.service";
import {UserProfile} from "../model/user-profile";
import {Storage} from "@ionic/storage";
import {MenuController} from '@ionic/angular';
import {Ride} from '../model/ride';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
    ngOnInit(): void {

    }
  containerId = 'pick-up';
  page = 'pick-up';
  trip : boolean;
  isLoaded : boolean;
  key = 'details';
  verificationCode: string;
  localUserData: UserProfile;
  user: any;
  private selectedZone: Zone;
  locality:string;
  constructor(private zoneService: ZoneService,
              private route: ActivatedRoute,
              private router: Router,
              private geolocation: Geolocation,
              private mapService: MapService,
              private rideService: RideService,
              private storage: Storage,
              private menuCtrl: MenuController) {
  }

  showVehicleList() {

     const ride = this.rideService.currentBooking;
     console.log('pickup zone me ride', ride);
     ride.sourceZone = this.selectedZone;
    if (!this.trip) {
     ride.destinationZones = [];
     ride.destinationZones.push(this.selectedZone);
    }
     this.rideService.setCurrentBooking(ride);

    const navigationExtras: NavigationExtras = {
      state: {
        trip: this.trip,
        pickUpZone: this.selectedZone
      }
    };
    // this.coordinates = this.zoneService.getCoordinatesByLocality(this.locality);
    this.router.navigate(['bikelist'], navigationExtras);
  }

  gettingCoordinatesByLocality($event: any) {
    this.mapService.gettingCoordinatesByLocality($event);
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.mapService.checkGPSPermission();

    console.log('user ki current ride check rk rha hu');
    this.storage.ready().then(() => {
      this.storage.get('details').then(value => {
        console.log('ye h wo user ', value);
        this.rideService.getCurrentRide(value.id).then(response => {
          console.log('ye aaya hresonse', response);
          if(response.status === 200 && response.data && JSON.parse(response.data).data) {
            console.log('data', response.data);
            const currentRide: Ride = JSON.parse(response.data).data;
            console.log('ye h ride ka data', currentRide);
            if(currentRide.status === 'Confirmed') {
              this.router.navigateByUrl('ride-booking-details');
            }
            else if(currentRide.status === 'Started') {
              this.router.navigateByUrl('ride-details');
            }
          }
        })
      })
    })

    // this.mapService.requestGPSPermission();
    // this.mapService.askToTurnOnGPS();
    // this.mapService.getLocationCoordinates();
    // // this.geolocation.getCurrentPosition().then((resp) => {
    // //   const lat = resp.coords.latitude;
    // //   const lng = resp.coords.longitude;
    // //   this.mapService.buildMap(lat, lng, 'pickup', true);
    // //   // this.mapService.checkMapLoading();
    //   // this.mapService.marker(lat, lng);
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });
    this.mapService.selectZone$.subscribe(zone => {
      console.log('selected zone', zone);
      this.selectedZone = zone;
    });
    this.mapService.onLoad$.subscribe((message: string) => {
      console.log('lo ho gya load ab tofinally~~~');
      this.isLoaded = true;
    });

    this.storage.ready().then(() => {
      this.storage.get(this.key).then(value => {
        console.log('this is in storage', value);
        this.localUserData = value;
      });
    });
  }
}

