import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RideDetailsPage } from './ride-details.page';
<<<<<<< HEAD
import {SharedModule} from "../shared/shared.module";
=======
import {SharedModule} from '../shared/shared.module';
>>>>>>> ride-feature

const routes: Routes = [
  {
    path: '',
    component: RideDetailsPage
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
  declarations: [RideDetailsPage]
})
export class RideDetailsPageModule { }
