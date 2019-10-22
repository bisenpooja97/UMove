import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import {RideService} from "../service/ride.service";
import {Ride} from "../model/ride";

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.page.html',
  styleUrls: ['./ride-detail.page.scss'],
})
export class RideDetailPage implements OnInit {

  ride: Ride;

  constructor(private barcodeScanner: BarcodeScanner, private router: Router, private rideService: RideService) { }

  ngOnInit() {
    this.barcodeScanner.scan().then(qrCodeData => {
      console.log('QR Data:', qrCodeData);

      let rideId = undefined;
      try {
        rideId = JSON.parse(qrCodeData.text)._id;
      }
      catch (e) {
        this.rideService.presentToast('Wrong QR Code.', 3000);
        this.router.navigateByUrl('home');
      }
      this.rideService.getRideDetailById(rideId).then(response => {
        console.log('response', response);
        if(response) {
          if(response.status === 200 && response.data) {
            console.log('data', JSON.parse(response.data).data);
            this.ride = JSON.parse(response.data).data;
          }
          else {
            this.rideService.presentToast('Try again Later', 2000);
            this.router.navigateByUrl('home');
          }
        }
        else {
          this.rideService.presentToast('Something went wrong.', 2000);
          this.router.navigateByUrl('home');
        }
      })
    });
  }

  onEndRide(){
    this.router.navigateByUrl('end-ride-form/' + this.ride._id)
  }

}
