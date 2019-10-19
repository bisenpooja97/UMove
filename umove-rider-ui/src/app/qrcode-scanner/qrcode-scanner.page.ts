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
  vehicleNumber: string;

  constructor(private barcodeScanner: BarcodeScanner, private router: Router, private rideService: RideService) {
    this.rideService.getRideDetailsByUserIdNStatus('786', 'Confirmed')
      .then(response => {
        console.log('Booking details in scanner: ', response);
        this.ride = JSON.parse(response.data).data;
        console.log(this.ride);
      });
  }

  ngOnInit() {
    this.barcodeScanner.scan().then(qrCodeData => {
      this.vehicleNumber = undefined;
      console.log('QR Data:', qrCodeData);
      console.log('vehicle number: ', qrCodeData.text);
      try {
        this.vehicleNumber = qrCodeData.text;
      }
      catch (e) {
        this.rideService.presentToast('Wrong QR Code.', 3000);
        this.router.navigateByUrl('ride-booking-details');
      }
      this.rideService.startRideById(this.ride._id, this.vehicleNumber).then(response => {

        console.log('response', response);
        if (response) {
          if (response.status === 200 && response.data) {
            console.log('response of start ride:', JSON.parse(response.data).data);
            this.ride = JSON.parse(response.data).data;
            this.router.navigateByUrl('ride-details');
          }
          else {
            this.rideService.presentToast('Try again Later', 2000);
            this.router.navigateByUrl('home');
          }
        }
        else {
          this.rideService.presentToast('Something went wrong.', 2000);
          this.router.navigateByUrl('ride-booking-details');
        }
      });
    });
  }

  timerFinished() {
    this.rideService.autocancelRideById(this.ride._id).then(data => {
      console.log('response of autocancel ride: ', data);
    });
    mobiscroll.alert({
      title: 'Your ride is autocancelled',
      message: 'Please book a new ride.',
      callback: () => {
        // Apply the url of home page
        this.router.navigateByUrl('ride-booking-details');
      }
    });
  }

}
