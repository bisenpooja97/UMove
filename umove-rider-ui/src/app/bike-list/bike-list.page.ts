import { Component, OnInit } from '@angular/core';
import {ZoneService} from '../service/zone/zone.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Dialogs} from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.page.html',
  styleUrls: ['./bike-list.page.scss'],
})
export class BikeListPage implements OnInit {

  constructor(private zoneService: ZoneService, private route: ActivatedRoute, private router: Router, private dialogs: Dialogs) { }
  bikeList = null;
  pickUpZone: string;
  trip: boolean;
  formattedData: {} = {};
  typeList = [];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('params', params);
      if (this.router.getCurrentNavigation().extras.state) {
        this.trip = this.router.getCurrentNavigation().extras.state.trip;
        this.pickUpZone = this.router.getCurrentNavigation().extras.state.pickUpZone;
        console.log('trip', this.pickUpZone);
      }
    });

    // Subsribing service for getting vehicles list for a particular zone
    this.zoneService.getVehiclesByZoneTypes(this.pickUpZone).then(data => {
       this.bikeList = data;
      this.bikeList.data.map(item => {
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
    });
    //
    // this.dialogs.confirm('Hello world')
    //   .then(() => console.log('Dialog dismissed'))
    //   .catch(e => console.log('Error displaying dialog', e));

  }
}
