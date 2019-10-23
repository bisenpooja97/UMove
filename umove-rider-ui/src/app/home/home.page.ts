import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {ZoneService} from "../service/zone/zone.service";
import {Zone} from "../model/zone";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {MapService} from "../service/zone/map.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
    ngOnInit(): void {

      this.geolocation.getCurrentPosition().then((resp) => {
        const lat = resp.coords.latitude;
        const lng = resp.coords.longitude;
        this.mapService.buildMap(lat, lng,'pickup');
        // this.mapService.checkMapLoading();
        this.mapService.marker(lat, lng);
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
  containerId = 'pick';
  page = 'pick-up';
  trip : boolean;
  isLoaded : boolean;

  private selectedZone: Zone;
  locality:string;
  constructor(private zoneService: ZoneService,
              private route: ActivatedRoute,
              private router: Router,
              private geolocation: Geolocation,
              private mapService: MapService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.page = this.router.getCurrentNavigation().extras.state.page;
        // this.trip = this.router.getCurrentNavigation().extras.state.trip;
        console.log('page', this.page);
      }
    });
  }

  sendDataToService() {
    // const booking = this.bookingService.currentBooking;
    // booking.sourceZone = this.selectedzone;
    // if (this.trip) {
    // booking.destinationZones.push(this.selectedzone);
    // } else {
    //   booking.destinationZones.push(this.selectedzone);
    // }
    //
    // this.bookingService.setCurrentBooking(booking);
    const navigationExtras: NavigationExtras = {
      state: {
        trip: this.trip,
        pickUpZone: this.selectedZone
      }
    };
    // this.coordinates = this.zoneService.getCoordinatesByLocality(this.locality);
    this.router.navigate(['bikelist'], navigationExtras);
  }

  booking() {
    const navigationExtras: NavigationExtras = {
      state: {
        trip: this.trip,
        pickUpZone: this.selectedZone
      }
    };
    this.router.navigate(['confirm-ride-detail'], navigationExtras);
  }

  getSelected(selectedZone: Zone ) {

    this.selectedZone = selectedZone;
    
  }

  gettingCoordinatesByLocality($event: any) {
    this.mapService.gettingCoordinatesByLocality($event);
  }
}

