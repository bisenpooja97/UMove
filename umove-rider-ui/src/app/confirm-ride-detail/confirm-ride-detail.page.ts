import { Component, OnInit } from '@angular/core';
import { Ride } from '../model/ride';
import { RideService } from '../service/ride.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {MapService} from '../service/zone/map.service';

@Component({
  selector: 'app-confirm-ride-detail',
  templateUrl: './confirm-ride-detail.page.html',
  styleUrls: ['./confirm-ride-detail.page.scss'],
})
export class ConfirmRideDetailPage implements OnInit {

  booking: Ride;

  constructor(private rideService: RideService, private mapService: MapService, private geolocation: Geolocation, private actionSheetController: ActionSheetController, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const state = this.router.getCurrentNavigation().extras.state;
      if (state) {
        if (state.selectedPaymentMethod) {
          console.log('payment method, ', state.selectedPaymentMethod);
          this.booking.paymentMethod = state.selectedPaymentMethod;
          console.log('selected payment method: ', this.booking.paymentMethod);
        } else if (state.selectedPromocode) {
          this.booking.promocode = state.selectedPromocode;
        }
      }
    });
  }

  ngOnInit() {

    this.booking = this.rideService.getCurrentBooking();
    this.booking.destinationZones = [];

    /*
      dummy data which will be replaced by the actual data.
    */
    this.booking.rider = {
      _id: '5d8bbc0da6e87d5404aa1921',
      name: 'Visnu',
      email: 'bochiwal.visnu@gmail.com'
    };

    this.booking.vehicle = {
      id: '5da1ab649bd1160001cb8a03',
      zoneId: null,
      registrationNo: 'RJ27CA3456',
      insuranceNo: '678567',
      status: 'Busy',
      vehicleType: {
        id: '5da1a0989bd1160001cb8a02',
        name: 'R1',
        costPerKm: 9,
        costPerMin: 0.25,
        vehicleCC: '220cc',
        mileage: 25,
        fuel: {
          id: '5da1a0989bd1160001cb8a87',
          name: 'Petrol',
          fuelCost: 80
        },
        baseFare: 20,
        url: 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1570608854_vespa.png'
      },
      lastServiceDate: new Date(),
      purchasedDate: new Date(),
      chassisNumber: '987665'
    };

    this.booking.sourceZone = {
      id: '5da41d0c30c49e000131313c',
      name: 'Zone-Koramangala-B8',
      lat: 12.9416,
      lon: 77.61718,
      city: 'Bengaluru Urban',
      state: 'Karnataka',
      country: 'India',
      pincode: 560002,
      locality: 'Block 8 koramangala',
      capacity: 100,
      createdAt: new Date(),
      supervisorId: '5da5e1cfadbe1d0001409653',
      supervisorName: 'Suraj',
      supervisorNumber: '9456789090',
      supervisorEmail: 'suraj@gmail.com',
      status: 'FULL'
    };

    this.booking.destinationZones.push({
      id: '5da41d0c30c49e000131313c',
      name: 'Zone-Manyata',
      lat: 12.9416,
      lon: 77.61718,
      city: 'Bengaluru Urban',
      state: 'Karnataka',
      country: 'India',
      pincode: 560002,
      locality: 'Manyata',
      capacity: 100,
      createdAt: new Date(),
      supervisorId: '5da5e1cfadbe1d0001409653',
      supervisorName: 'Suraj',
      supervisorNumber: '9456789090',
      supervisorEmail: 'suraj@gmail.com',
      status: 'FULL'
    });

    console.log('payment method: ', this.booking.paymentMethod);
    console.log('promocode', this.booking.promocode);

    // dummy data ends here


    if (!this.booking.vehicle) {
      this.rideService.presentToast('Please Select a Vehicle.', 2000);
      this.router.navigateByUrl('home');
    } else if (!this.booking.sourceZone) {
      this.rideService.presentToast('Please Select a Source Zone', 2000);
      this.router.navigateByUrl('home');
    } else if (!this.booking.destinationZones || !this.booking.destinationZones.length) {
      this.rideService.presentToast('Please Select a Destination Zone', 2000);
      this.router.navigateByUrl('home');
    }
  }

  confirmBooking() {
    this.rideService.confirmBooking(this.booking).then(response => {
      console.log('response: ', response);
      if (response && response.status === 201 && response.data) {
        this.router.navigateByUrl('ride-booking-details');
      } else if (!response) {
        this.rideService.presentToast('Error: Something Went Wrong, Try again.', 2000);
        this.router.navigateByUrl('');
      } else {
        this.rideService.presentToast(JSON.parse(response.data).message, 2000);
        this.router.navigateByUrl('');
      }
    });
  }

  removeSelectedPaymentMethod() {
    this.booking.paymentMethod = undefined;
  }

  removeSelectedPromocode() {
    this.booking.promocode = undefined;
  }

  ionViewDidEnter() {
    console.log('map dikhana h !!')
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('ab to dikhna chahiye tha!')
      const lat = resp.coords.latitude;
      const lng = resp.coords.longitude;
      this.mapService.buildMap(lat, lng, 'booking', false);
      // this.mapService.checkMapLoading();
      this.mapService.marker(lat, lng);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

}
