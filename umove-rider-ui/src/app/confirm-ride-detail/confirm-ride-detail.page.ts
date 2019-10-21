import { Component, OnInit } from '@angular/core';
import { Ride } from '../model/ride';
import { RideService } from '../service/ride.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-ride-detail',
  templateUrl: './confirm-ride-detail.page.html',
  styleUrls: ['./confirm-ride-detail.page.scss'],
})
export class ConfirmRideDetailPage implements OnInit {

  booking: Ride;

  constructor(private rideService: RideService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const state = this.router.getCurrentNavigation().extras.state;
      if (state) {
        if (state.selectedPaymentMethod) {
          this.booking.paymentMethod = state.selectedPaymentMethod;
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
    };

    this.booking.sourceZone = {
      "id":"5da41d0c30c49e000131313c",
      "name":"Zone-Koramangala-B8",
      "lat":12.9416,
      "lon":77.61718,
      "city":"Bengaluru Urban",
      "state":"Karnataka",
      "country":"India",
      "pincode":560002,
      "locality":"Block 8 koramangala",
      "capacity":100,
      "createdAt":new Date(),
      "supervisorId":"5da5e1cfadbe1d0001409653",
      "supervisorName":"Suraj",
      "supervisorNumber":"9456789090",
      "supervisorEmail":"suraj@gmail.com",
      "status":"FULL"
    };

    this.booking.destinationZones.push({
      "id":"5da41d0c30c49e000131313c",
      "name":"Zone-Manyata",
      "lat":12.9416,
      "lon":77.61718,
      "city":"Bengaluru Urban",
      "state":"Karnataka",
      "country":"India",
      "pincode":560002,
      "locality":"Manyata",
      "capacity":100,
      "createdAt":new Date(),
      "supervisorId":"5da5e1cfadbe1d0001409653",
      "supervisorName":"Suraj",
      "supervisorNumber":"9456789090",
      "supervisorEmail":"suraj@gmail.com",
      "status":"FULL"
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
}
