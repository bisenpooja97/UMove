import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ZoneService } from '../service/zone.service';
import { Zone } from 'src/app/model/zone';

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrls: ['./zone-details.component.css']
})
export class ZoneDetailsComponent implements OnInit {

  zone: Zone[];
  name: string;
  city: string;
  country: string;
  locality: string;
  creationTime: string;
  state: string;
  pincode: string;
  capacity: number;
  sName: string;
  sNumber: string;
  sEmail: string;
  sStatus: string;

  zoneStatus: Status[] = [
    { value: 'INACTIVE', viewValue: 'INACTIVE' },
    { value: 'ACTIVE', viewValue: 'ACTIVE' },
    { value: 'UNDER_MAINTAINANCE', viewValue: 'UNDER_MAINTAINANCE' },
    { value: 'FULL', viewValue: 'FULL' },
  ];


  constructor(private router: Router, private zoneService: ZoneService,
              private activatedRoute: ActivatedRoute, private route: ActivatedRoute) { }

  ngOnInit() {
    this.zoneService.getZoneByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
      this.zone = res.data;
      this.name = this.zone[0].name;
      this.city = this.zone[0].city;
      this.country = this.zone[0].country;
      this.locality = this.zone[0].locality;
      this.creationTime = this.zone[0].time;
      this.state = this.zone[0].state;
      this.pincode = this.zone[0].pincode;
      this.capacity = this.zone[0].capacity;
      this.sName = this.zone[0].supervisorName;
      this.sNumber = this.zone[0].supervisorNumber;
      this.sEmail = this.zone[0].supervisorEmail;
    });
  }


  onEdit() {

  }

}
