import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RideDetailPage } from './ride-detail.page';
import {BikeDetailComponent} from "../bike-detail/bike-detail.component";

const routes: Routes = [
  {
    path: '',
    component: RideDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RideDetailPage, BikeDetailComponent]
})
export class RideDetailPageModule {}
