import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/zones/service/zone.service';
import { VehicleService } from 'src/app/vehicles/vehicle.service';
import { VehicleTypeService } from 'src/app/types/vehicle-type.service';
import { UserService } from 'src/app/users/service/user.service';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styleUrls: ['./count-display.component.css']
})
export class CountDisplayComponent implements OnInit {

  zoneCount: number;
  vehicleCount: number;
  typeCount: number;
  userCount: number;
  constructor(private zoneService: ZoneService,
              private vehicleService: VehicleService,
              private vehicleTypeService: VehicleTypeService,
              private userService: UserService) { }

  ngOnInit() {
   this.zoneService.getZones().subscribe(res => {
     this.zoneCount = res.count;
   });
   this.vehicleService.getVehicles().subscribe(res => {
    this.vehicleCount = res.count;
  });
   this.vehicleTypeService.getType().subscribe(res => {
    this.typeCount = res.count;
  });
   this.userService.getUsers().subscribe(res => {
    this.userCount = res.count;
  });
  }

}
