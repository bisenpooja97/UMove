import { Component, OnInit, ViewChild } from '@angular/core';
import { Ride } from '../model/ride';
import { mobiscroll, MbscTimerOptions } from '@mobiscroll/angular';
import { RideService } from '../service/ride.service';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qrcode-scanner',
  templateUrl: './qrcode-scanner.page.html',
  styleUrls: ['./qrcode-scanner.page.scss'],
})
export class QrcodeScannerPage implements OnInit {
  ride: Ride;
  timerSettings: MbscTimerOptions;
  timerTime: number;
  vehicleNumber: string;
  rideBookedAt: Date;
  rightNow: Date;
  timerSeconds: number;

  constructor(private barcodeScanner: BarcodeScanner, private router: Router, private rideService: RideService) {
  }

  ngOnInit() {

    this.rideService.getRideDetailsByUserIdNStatus('786', 'Confirmed')
      .then(response => {
        console.log('Booking details in scanner: ', response);
        this.ride = JSON.parse(response.data).data;
        console.log(this.ride);
        // this.rideBookedAt = new Date(this.ride.bookedAt);
        // console.log('Ride booked at ', this.rideBookedAt);
        // console.log(typeof (this.rideBookedAt));
        // this.timerTime = this.ride.timer;
        // console.log('Timer time is ', this.timerTime);
        // this.rideBookedAt.setMinutes(this.rideBookedAt.getMinutes() + this.timerTime);
        // console.log('Autocancel time is ', this.rideBookedAt);
        // this.rightNow = new Date();
        // console.log(typeof (this.rightNow));
        // this.timerSeconds = (this.rideBookedAt.getTime() - this.rightNow.getTime()) / 1000;
        // console.log(this.timerSeconds);
        // if (this.timerSeconds > 0) {
        //   this.timerSettings = {
        //     animate: 'fade',
        //     targetTime: this.timerSeconds,
        //     maxWheel: 'minutes',
        //     minWidth: 100,
        //     autostart: true,
        //     buttons: []
        //   };
        // } else {
        //   this.timerFinished();
        // }
      });

    this.barcodeScanner.scan().then(qrCodeData => {
      console.log('QR Data:', qrCodeData);
      this.vehicleNumber = undefined;
      try {
        console.log('vehicle number: ', JSON.parse(qrCodeData.text).registrationNo);
        this.vehicleNumber = JSON.parse(qrCodeData.text).registrationNo;
      } catch (e) {
        this.rideService.presentToast('Wrong QR Code.', 3000);
        this.router.navigateByUrl('ride-booking-details');
      }
      this.rideService.startRideById(this.ride._id, this.vehicleNumber).then(response => {
        console.log('response', response);
        this.ride = JSON.parse(response.data).data;
        this.router.navigateByUrl('ride-details');
      });
    });
  }

  // timerFinished() {
  //   this.rideService.autocancelRideById(this.ride._id).then(data => {
  //     console.log('response of autocancel ride: ', data);
  //   });
  //   mobiscroll.alert({
  //     title: 'Your ride is autocancelled',
  //     message: 'Please book a new ride.',
  //     callback: () => {
  //       // Apply the url of home page
  //       this.router.navigateByUrl('ride-booking-details');
  //     }
  //   });
  // }

}
