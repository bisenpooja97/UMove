import { Component, OnInit } from '@angular/core';
import { Zone } from '../model/zone';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-dummy-destination-zone',
  templateUrl: './dummy-destination-zone.page.html',
  styleUrls: ['./dummy-destination-zone.page.scss'],
})
export class DummyDestinationZonePage implements OnInit {
  destinationZone: Zone;
  constructor(private router: Router) {
  }

  ngOnInit() {

    this.destinationZone = {
      id: '5da41d0c30c49e000131313c',
      name: 'Zone-Koramangala-B8',
      lat: 12.9416,
      lon: 77.61718,
      city: 'Bengaluru Urban',
      state: 'Karnataka',
      country: 'India',
      pincode: 560002,
      locality: 'Koramangala',
      capacity: 100,
      createdAt: new Date(),
      supervisorId: '5da5e1cfadbe1d0001409653',
      supervisorName: 'Suraj',
      supervisorNumber: '9456789090',
      supervisorEmail: 'suraj@gmail.com',
      status: 'FULL'
    };
  }

  // Sending zone data as navigationExtras
  sendZone(data) {
    console.log('Send Zone: ', data);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: data
      }
    };
    this.router.navigateByUrl('ride-details', navigationExtras);
  }

}
