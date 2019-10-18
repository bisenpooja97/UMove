import { Component, OnInit } from '@angular/core';
import { Ride } from '../model/ride';
import { RideService } from '../service/ride.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qrcode-generator',
  templateUrl: './qrcode-generator.page.html',
  styleUrls: ['./qrcode-generator.page.scss'],
})
export class QrcodeGeneratorPage implements OnInit {
  qrData = null;
  createdCode = null;
  ride: Ride;

  constructor(private rideService: RideService, private route: ActivatedRoute, private router: Router) {
    this.rideService.getRideDetailsByUserIdNStatus('5d8bbc0da6e87d5404aa1921', 'endRideRequest')
      .then(response => {
        console.log('Ride details: ', response);
        this.ride = JSON.parse(response.data).data;
        // tslint:disable-next-line: object-literal-key-quotes
        this.createdCode = JSON.stringify({ '_id': this.ride._id });
        console.log('Created code data should be: ', this.createdCode);
      });
  }

  ngOnInit() {
  }

}
