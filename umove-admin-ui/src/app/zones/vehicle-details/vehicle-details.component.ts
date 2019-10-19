import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/vehicles/vehicle.service';
import { Vehicle } from 'src/app/model/Vehicle';
import { ZoneService } from '../service/zone.service';
import { ActivatedRoute } from '@angular/router';
import { Zone } from 'src/app/model/zone';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  vehicle: Vehicle[];
  zone: Zone[];
  id: string;
  constructor(private vehicleService: VehicleService,
              private zoneService: ZoneService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getZoneDetails();
    this.vehicleService.getVehicles().subscribe(res => { 
      // if (val.zoneid === this.id) {
        this.vehicle = res.data;
      // }
  
} );
  }

  getZoneDetails() {
    this.zoneService.getZoneByName(this.route.snapshot.paramMap.get('name')).subscribe(res => {
      this.zone = res.data;
      console.log(res);
      this.id = this.zone[0].id;
    });
  }

}
