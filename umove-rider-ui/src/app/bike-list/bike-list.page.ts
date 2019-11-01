import {Component, OnInit, Output,ViewChild} from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import {ZoneService} from '../service/zone/zone.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Zone} from "../model/zone";
import {HTTPResponse} from "@ionic-native/http";
import {TypeCountList} from "../model/type-count-list";
import {RideService} from "../service/ride.service";
import {Vehicle} from "../model/vehicle";


@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.page.html',
  styleUrls: ['./bike-list.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class BikeListPage implements OnInit {
  @ViewChild(IonInfiniteScroll,{static:false}) infiniteScroll: IonInfiniteScroll;
  private response = null;
  private data: any;

  constructor(private zoneService: ZoneService,private rideService: RideService, private route: ActivatedRoute, private router: Router) { }

  pickUpZone: Zone;
  trip: boolean;
  formattedData: {} = {};
  typeList: TypeCountList[];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('params', params);
      if (this.router.getCurrentNavigation().extras.state) {
        this.trip = this.router.getCurrentNavigation().extras.state.trip;
        this.pickUpZone = this.router.getCurrentNavigation().extras.state.pickUpZone;
        console.log('trip', this.pickUpZone);
        this.doInfinite();
      }
    });
  }
  

  onVehicleSelected(vehicle: Vehicle) {
    const navigationExtras: NavigationExtras  = {
      state: {
        page: 'drop',
      }
    };
    console.log('type',vehicle);
    const ride = this.rideService.getCurrentBooking();
    ride.vehicle = vehicle;
    this.rideService.setCurrentBooking(ride);
    if (this.trip) {
      this.router.navigate(['drop'], navigationExtras);
    } else {
      this.router.navigate(['confirm-ride-detail']);
    }
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');
    return new Promise((resolve) => {
      setTimeout(() => {
        this.zoneService.getVehiclesByZoneTypes(this.pickUpZone.id).then(response => {
          console.log('responose', response);
          const bikeList = JSON.parse(response.data);
          bikeList.data.map(item => {
            console.log('bike ka item: ', item);
            if (this.formattedData.hasOwnProperty(item.vehicleType.name)) {
              this.formattedData[item.vehicleType.name].count++;
            } else {
              this.formattedData[item.vehicleType.name] = {
                vehicle: item,
                count: 1
              };
            }
          });
          this.typeList = Object.values(this.formattedData);
          console.log('TypeList:', this.typeList);
        });
        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }

}
