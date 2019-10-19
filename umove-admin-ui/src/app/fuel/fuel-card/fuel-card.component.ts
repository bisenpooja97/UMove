import { Component, OnInit, Input } from '@angular/core';
import { Fuel } from 'src/app/model/Fuel';
import { Router, ActivatedRoute } from '@angular/router';
import { FuelService } from '../fuel.service';
import { MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { UpdateFuelComponent } from '../update-fuel/update-fuel.component';

@Component({
  selector: 'app-fuel-card',
  templateUrl: './fuel-card.component.html',
  styleUrls: ['./fuel-card.component.css']
})
export class FuelCardComponent implements OnInit {
  @Input() fuel: Fuel;
  name: string;
  costFuel: number;

  constructor(private router: Router) { }


  ngOnInit() {
     this.name = this.fuel.name;
     this.costFuel = this.fuel.costFuel;

   //  this.category = this.vehicle.type.category;


  }

  ok() {
    this.router.navigate(['fuel/', this.name]);

  }


  //////////////////////////////////////////////trial//////////////////////////////////////////////////////



}
