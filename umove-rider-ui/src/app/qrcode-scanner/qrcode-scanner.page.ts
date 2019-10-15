import { Component, OnInit } from '@angular/core';
import { Ride } from '../model/ride';
import { map } from 'rxjs/operators';
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
      console.log('QR Data:', qrCodeData);
      console.log('vehicle number: ', qrCodeData.text);
      this.vehicleNumber = qrCodeData.text;
      this.rideService.startRideById(this.ride._id, this.vehicleNumber).then(data => {
        console.log('response of start ride: ', data);
        this.router.navigateByUrl('ride-details');
      });
      // const navigationExtras: NavigationExtras = {
      //   state: {
      //     vehicleNumber: JSON.parse(qrCodeData.text)
      //   }
      // };
    });

  }

}
