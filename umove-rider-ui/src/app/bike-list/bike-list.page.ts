import {Component, OnInit, Output} from '@angular/core';
import {ZoneService} from '../service/zone/zone.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Zone} from "../model/zone";
import {HTTPResponse} from "@ionic-native/http";
import {TypeCountList} from "../model/type-count-list";


@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.page.html',
  styleUrls: ['./bike-list.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class BikeListPage implements OnInit {
  private response = null;
  private data: any;

  constructor(private zoneService: ZoneService, private route: ActivatedRoute, private router: Router) { }
  pickUpZone: Zone;
  trip: boolean;
  formattedData: {} = {};
  typeList : TypeCountList[];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('params', params);
      if (this.router.getCurrentNavigation().extras.state) {
        this.trip = this.router.getCurrentNavigation().extras.state.trip;
        this.pickUpZone = this.router.getCurrentNavigation().extras.state.pickUpZone;
        console.log('trip', this.pickUpZone);
        this.zoneService.getVehiclesByZoneTypes(this.pickUpZone.id).then(response => {
          const bikeList = JSON.parse(response.data);
          bikeList.data.map(item => {
            if (this.formattedData.hasOwnProperty(item.type.name)) {
              this.formattedData[item.type.name].count++;
            } else {
              this.formattedData[item.type.name] = {
                type: item.type,
                count: 1
              };
            }
          });
          this.typeList = Object.values(this.formattedData);
          console.log('TypeList:', this.typeList);
        });
      }
    });

  }

  onVehicleSelected(type: {}) {
    const navigationExtras: NavigationExtras  = {
      state: {
        page: 'drop',
      }
    };
    if (this.trip) {
      this.router.navigate(['drop'], navigationExtras);
    } else {
      this.router.navigate(['confirm-ride-detail'], navigationExtras);
    }
  }
}
