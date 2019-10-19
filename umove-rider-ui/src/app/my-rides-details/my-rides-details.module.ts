import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyRidesDetailsPage } from './my-rides-details.page';

const routes: Routes = [
  {
    path: '',
    component: MyRidesDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyRidesDetailsPage]
})
export class MyRidesDetailsPageModule {}
