import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EndRideFormPage } from './end-ride-form.page';

const routes: Routes = [
  {
    path: '',
    component: EndRideFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EndRideFormPage]
})
export class EndRideFormPageModule {}
