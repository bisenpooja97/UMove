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
    this.destinationZone = {
      zoneId: '5d8c7a62adfffb7e746ccee8',
      name: 'Zone-A',
      lat: -85.2065802380484,
      lon: 42.70837049544012,
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      pincode: 560034,
      capacity: 100,
      status: 'FULL',
      locality: 'Madiwala',
      supervisorId: '1',
      supervisorName: 'Subhash',
      supervisorNumber: '9196778866',
      supervisorEmail: 'subhash@gmail.com'
    };
  }

  ngOnInit() {
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
