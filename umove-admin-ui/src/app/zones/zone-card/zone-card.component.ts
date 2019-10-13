import { Component, OnInit, Input } from '@angular/core';
import { Zone } from 'src/app/model/zone';
import { Router } from '@angular/router';
import { ZoneService } from '../service/zone.service';

@Component({
  selector: 'app-zone-card',
  templateUrl: './zone-card.component.html',
  styleUrls: ['./zone-card.component.css']
})
export class ZoneCardComponent implements OnInit {

  @Input() zones: Zone[];
  zoneNames: object;
  city: object;
  status: object;

  constructor(private router: Router) {}

  ngOnInit() {
     this.zoneNames = Object.values(this.zones)[1];
     this.city = Object.values(this.zones)[4];
     this.status = Object.values(this.zones)[15];
  }

  ok() {
    console.log('hi');
    this.router.navigate(['zones/', this.zoneNames]);
    }

    getColor(status) {
                       switch (status) {
        case 'ACTIVE':
          return 'green';
        case 'INACTIVE':
          return 'cyan';
        case 'FULL':
          return 'red';
        case 'UNDER_MAINTAINANCE':
          return 'gray';
      }
}
}
