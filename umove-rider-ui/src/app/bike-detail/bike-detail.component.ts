import { Component, OnInit, Output, Input } from '@angular/core';
import {Vehicle} from '../model/vehicle';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.scss'],
})

export class BikeDetailComponent implements OnInit {

  @Input()
  selectedVehicle: Vehicle;

  constructor() { }

  ngOnInit() {
    // console.log("selected vehicle", this.selectedVehicle);
  }

}
