import { Component, OnInit } from '@angular/core';
import { ZoneService} from '../service/zone/zone.service';
import {Zone} from '../model/zone';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {MapService} from "../service/zone/map.service";
import {RideService} from "../service/ride.service";

@Component({
  selector: 'app-drop',
  templateUrl: './drop.page.html',
  styleUrls: ['./drop.page.scss'],
})
export class DropPage implements OnInit {
  ngOnInit(): void {

    this.geolocation.getCurrentPosition().then((resp) => {
      const lat = resp.coords.latitude;
      const lng = resp.coords.longitude;
      this.mapService.buildMap(lat, lng,'drop',true);
      // this.mapService.checkMapLoading();
      // this.mapService.marker(lat, lng);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.mapService.selectZone$.subscribe(zone => {
      console.log('selected zone',zone);
      this.selectedZone = zone;
    });
    this.mapService.onLoad$.subscribe((message:string)=>{
      console.log('lo ho gya load ab tofinally~~~');
      this.isLoaded = true;
    })
  }
  containerId = 'drop';
  page = 'drop';
  trip : boolean;
  isLoaded : boolean;

  private selectedZone: Zone;
  locality:string;
  constructor(private zoneService: ZoneService,
              private route: ActivatedRoute,
              private router: Router,
              private geolocation: Geolocation,
              private mapService: MapService,
              private rideService: RideService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.page = this.router.getCurrentNavigation().extras.state.page;
        console.log('page', this.page);
      }
    });
  }

  confirmBooking() {
    const ride = this.rideService.currentBooking;
    ride.destinationZones = [];
    ride.destinationZones.push(this.selectedZone);
    this.rideService.setCurrentBooking(ride);
    this.router.navigate(['confirm-ride-detail']);
  }

  rideDetails() {
    const navigationExtras: NavigationExtras = {
      state: {
        dropZone: this.selectedZone
      }
    };
    this.router.navigate(['ride-details'],navigationExtras);
  }

  gettingCoordinatesByLocality($event: any) {
    this.mapService.gettingCoordinatesByLocality($event);
  }
}
