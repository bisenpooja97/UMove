import { Component, OnInit } from '@angular/core';

import {Vehicle} from '../model/vehicle';
import {VehicleService} from "../service/vehicle.service";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.page.html',
  styleUrls: ['./vehicle-list.page.scss'],
})
export class VehicleListPage implements OnInit {
  vehicleList: Vehicle[];
  constructor(private vehicleService: VehicleService) {
  }

  ngOnInit() {
    // this.vehicleList = [{id: '5d8bc48da6e87d5404aa1924', zoneid: '5d8b5854a6e87d1720796c8f', registrationNo: 'Rj12', insurance_no: '12334', status: 'Busy', type: {_id: '5d8bbc0da6e87d5404aa1921', name: 'bullet', costkm: 10, costtime: 0, imageUrl: 'https://mpng.pngfly.com/20180525/lpz/kisspng-royal-enfield-bullet-motorcycle-enfield-cycle-co-bullet-bike-5b08a79374e5e9.7303244115272938434788.jpg'}, time: '2019-09-25T18:25:29.782+0000', lastServiceDate: '11111', vehiclePurchased: 'sjsjjss'}, {id: '5d8bc4d2a6e87d5404aa1925', zoneid: '5d8b5854a6e87d1720796c8f', registrationNo: 'Rj13', insurance_no: '12334', status: 'Busy', type: {_id: '5d8bbc61a6e87d5404aa1922', name: 'scooty', costkm: 5, costtime: 0, imageUrl: 'https://p7.hiclipart.com/preview/802/853/151/honda-dio-scooter-motorcycle-black-honda.jpg'}, time: '2019-09-25T18:25:29.782+0000', lastServiceDate: '11111', vehiclePurchased: 'sjsjjss'}];
    this.vehicleService.getVehiclesByZone('1').then(response => {
      const bikeList = JSON.parse(response.data);
      console.log('bikeslist', bikeList);
      this.vehicleList = bikeList.data;
    });
  }

changeVehicleStatus(vehicle: Vehicle) {
  // this.vehicleService.changeStatus(vehicle, vehicle.registrationNo).then(updatedData => {
  //   console.log(updatedData);
  // });
  console.log('updated vehicle', vehicle);
}
}
