import { Component, OnInit, ViewChild } from '@angular/core';
import { Ride } from '../model/ride';
import { mobiscroll, MbscTimerOptions } from '@mobiscroll/angular';
import { RideService } from '../service/ride.service';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ConfigurationService } from '../service/configuration.service';
import { Configuration } from '../model/configuration';
import {Storage} from '@ionic/storage';
import {timer} from 'rxjs';
import {AlertController} from '@ionic/angular';
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

        this.configurationService.getConfigurationDetailsByName('autocancelTime')
            .then(response1 => {
                console.log('Configuration details: ', response1);
                this.configuration = JSON.parse(response1.data).data;
                console.log(this.configuration);
                this.timerTimeInMins = this.configuration.value;
                console.log('Auto cancel time is ', this.timerTimeInMins);
                this.storage.get(this.key).then(value => {
                    this.rideService.getRideDetailsByUserIdNStatus(value.id, 'Confirmed')
                        .then(response1 => {
                            console.log('Booking details in scanner: ', response1);
                            this.ride = JSON.parse(response1.data).data;
                            console.log(this.ride);
                            this.rideBookedAt = new Date(this.ride.bookedAt + 'Z');
                            console.log('Ride booked at ', this.rideBookedAt);
                            console.log(typeof (this.rideBookedAt));
                            // // this.timerTime = this.ride.timer;
                            console.log('Timer time in minutes is ', this.timerTimeInMins);
                            this.rideBookedAt.setMinutes(this.rideBookedAt.getMinutes() + this.timerTimeInMins);
                            console.log('Autocancel time is ', this.rideBookedAt);
                            this.rightNow = new Date();
                            console.log('RightNow time is ', this.rightNow);
                            this.timerSeconds = (this.rideBookedAt.getTime() - this.rightNow.getTime()) / 1000;

                            // console.log('timer in seconds ', this.timerSeconds);
                            // if (this.timerSeconds <= 0) {
                            //     console.log('khtm ho gai ride autocancel');
                            //     this.rideService.presentAlert('Auto-Cancelled', 'Your ride is autocancelled',
                            //         'Pay', () => {
                            //             console.log('click kr diya');
                            //             this.router.navigateByUrl('/payment-detail/' + this.ride._id);
                            //         })
                            // }

                        });
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

                    if(JSON.parse(response.data).status === 'Vehicle_Already_Booked') {
                        this.rideService.presentAlert('Vehicle Already Booked', 'This Vehicle is already ' +
                            'booked by someone else.', 'Try Again', () => {
                            this.router.navigateByUrl('ride-booking-details');
                        })
                    }
                    else {
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
                    }
                });
            }
        });
    }



}
