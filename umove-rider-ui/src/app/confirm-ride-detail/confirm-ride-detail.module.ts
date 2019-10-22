import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfirmRideDetailPage } from './confirm-ride-detail.page';
import {BikeDetailComponent} from '../bike-detail/bike-detail.component';
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: ConfirmRideDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ConfirmRideDetailPage]
})
export class ConfirmRideDetailPageModule {}
