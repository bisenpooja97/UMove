import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Zone } from 'src/app/model/zone';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/vehicles/vehicle.service';
import { Vehicle } from 'src/app/model/Vehicle';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-zone-card',
  templateUrl: './zone-card.component.html',
  styleUrls: ['./zone-card.component.css']
})
export class ZoneCardComponent implements OnInit {

  @Input() zones: Zone[];
  // @Output() shareDataEvent = new EventEmitter();
  id: object;
  zoneNames: object;
  city: object;
  status: object;
  locality: object;
  capacity: object;
  vehicle: Vehicle[] = [];
  count = 0;

  constructor(private router: Router,
              private vehicleService: VehicleService) {}

  ngOnInit() {
     this.zoneNames = Object.values(this.zones)[1];
     this.city = Object.values(this.zones)[4];
     this.status = Object.values(this.zones)[15];
     this.locality = Object.values(this.zones)[8];
     this.capacity = Object.values(this.zones)[9];
     this.id = Object.values(this.zones)[0];
     this.getVehiclesDetails();
  }

  ok() {
    this.router.navigate(['zones/', this.zoneNames], {queryParams: { count: this.count}});
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

getVehiclesDetails() {
  this.vehicleService.getVehicles().subscribe(res => {

    res.data.filter(val => {
      if (val.zoneid === String(this.id)) {
          this.count += 1;
      }
    });

});
}
}
