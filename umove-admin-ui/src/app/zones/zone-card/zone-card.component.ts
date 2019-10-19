import { Component, OnInit, Input } from '@angular/core';
import { Zone } from 'src/app/model/zone';
import { Router } from '@angular/router';

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
  locality: object;
  capacity: object;

  constructor(private router: Router) {}

  ngOnInit() {
     this.zoneNames = Object.values(this.zones)[1];
     this.city = Object.values(this.zones)[4];
     this.status = Object.values(this.zones)[15];
     this.locality = Object.values(this.zones)[8];
     this.capacity = Object.values(this.zones)[9];
  }

  ok() {
    this.router.navigate(['zones/', this.zoneNames]);
    }

    getColor(status) {
                       switch (status) {
        case 'ACTIVE':
          return '#1B5E20';
        case 'INACTIVE':
          return '#FFC400';
        case 'FULL':
          return '#F44336';
        case 'INMAINTAINANCE':
          return '#6D4C41';
      }
}
}
