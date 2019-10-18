import {Component, OnInit, Output} from '@angular/core';
import {ZoneService} from '../service/zone/zone.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';


@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.page.html',
  styleUrls: ['./bike-list.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class BikeListPage implements OnInit {

  constructor(private zoneService: ZoneService, private route: ActivatedRoute, private router: Router) { }
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
    // this.zoneService.getVehiclesByZoneTypes(this.pickUpZone).then(data => {
    //    this.bikeList = data;
    //   this.bikeList.data.map(item => {
    //     if (this.formattedData.hasOwnProperty(item.type.name)) {
    //       this.formattedData[item.type.name].count++;
    //     } else {
    //       this.formattedData[item.type.name] = {
    //         type: item.type,
    //         count: 1
    //       };
    //     }
    //   });
    //   this.typeList = Object.values(this.formattedData);
    // });
    //
    // this.dialogs.confirm('Hello world')
    //   .then(() => console.log('Dialog dismissed'))
    //   .catch(e => console.log('Error displaying dialog', e));
    this.bikeList = {
      'count': 2,
      'data': [
        {
          'id': '5da1ab649bd1160001cb8a03',
          'zoneid': null,
          'registrationNo': 'RJ27CA3456',
          'insuranceNo': '678567',
          'status': 'Busy',
          'type': {
            'Id': '5da1a0989bd1160001cb8a02',
            'name': 'R1',
            'costkm': 9,
            'costtime': 0.25,
            'category': 'Sports',
            'vehiclecc': '220cc',
            'kilometer': 25,
            'url': 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1570608854_vespa.png'
          },
          'lastServiceDate': new Date(),
          'vehiclePurchased': new Date()
        },
        {
          'id': '5da1ab649bd1160001cb8a03',
          'zoneid': null,
          'registrationNo': 'RJ27CA3456',
          'insuranceNo': '678567',
          'status': 'Busy',
          'type': {
            'Id': '5da1a0989bd1160001cb8a02',
            'name': 'R1',
            'costkm': 9,
            'costtime': 0.25,
            'category': 'Sports',
            'vehiclecc': '220cc',
            'kilometer': 25,
            'url':'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1570608854_vespa.png'
          },
          'lastServiceDate': new Date(),
          'vehiclePurchased': new Date()
        }
      ],
      'status': 'OK'
    };
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
    console.log('TypeList:', this.typeList);
  }

  onVehicleSelected(type: {}) {
    const navigationExtras: NavigationExtras  = {
      state: {
        page: 'drop',
      }
    };
    if (this.trip) {
      this.router.navigate([''], navigationExtras);
    } else {
      this.router.navigate(['confirm-ride-detail'], navigationExtras);
    }
  }
}
