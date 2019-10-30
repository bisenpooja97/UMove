import { Component, OnInit, ViewChild } from '@angular/core';
import { Ride } from '../model/ride';
import { mobiscroll, MbscTimerOptions } from '@mobiscroll/angular';
import { RideService } from '../service/ride.service';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ConfigurationService } from '../service/configuration.service';
import { Configuration } from '../model/configuration';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-qrcode-scanner',
  templateUrl: './qrcode-scanner.page.html',
  styleUrls: ['./qrcode-scanner.page.scss'],
})
export class QrcodeScannerPage implements OnInit {
  ride: Ride;
  configuration: Configuration;
  timerSettings: MbscTimerOptions;
  timerTime: number;
  timerTimeInMins: number;
  rideBookedAt: Date;
  rightNow: Date;
  timerSeconds: number;
  rideStatus: string;
  key = 'details';

  constructor(private barcodeScanner: BarcodeScanner, private router: Router, private rideService: RideService,
              private configurationService: ConfigurationService, private storage: Storage) {
  }

  ngOnInit() {

    this.storage.get(this.key).then(value => {
      this.rideService.getRideDetailsByUserIdNStatus(value.id, 'Confirmed')
          .then(response1 => {
            console.log('Booking details in scanner: ', response1);
            this.ride = JSON.parse(response1.data).data;
            console.log(this.ride);
          });
    });
    this.barcodeScanner.scan().then(qrCodeData => {
      console.log('QR Data:', qrCodeData);
      let vehicleNumber;
      try {
        console.log('vehicle number: ', JSON.parse(qrCodeData.text).registrationNo);
        vehicleNumber = JSON.parse(qrCodeData.text).registrationNo;
      } catch (e) {
        this.router.navigateByUrl('ride-booking-details');
        this.rideService.presentToast('Wrong QR Code.', 3000);
      }
      if (vehicleNumber !== undefined) {
      this.rideService.startRideById(this.ride._id, vehicleNumber).then(response => {
        console.log('response', response);
        this.ride = JSON.parse(response.data).data;
        this.rideStatus = this.ride.status;
        if (this.rideStatus === 'Auto_Cancelled') {
          this.router.navigateByUrl('payment-detail/' + this.ride._id);
          mobiscroll.alert({
            title: 'Your ride is autocancelled',
            message: 'Please book a new ride.',
            // callback: () => {
            //   // Apply the url of payment page
            //   this.router.navigateByUrl('payment-detail/' + this.ride._id);
            // }
          });
        } else {
          this.router.navigateByUrl('ride-details');
        }
      });
      }
    });
  }

}
