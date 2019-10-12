import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VehicleListPage } from './vehicle-list.page';
import {VehicleComponent} from '../vehicle/vehicle.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VehicleListPage, VehicleComponent]
})
export class VehicleListPageModule {}
