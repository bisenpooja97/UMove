import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FareEstimatorPage } from './fare-estimator.page';

const routes: Routes = [
  {
    path: '',
    component: FareEstimatorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FareEstimatorPage]
})
export class FareEstimatorPageModule {}
