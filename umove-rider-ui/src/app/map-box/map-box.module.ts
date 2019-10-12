import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapBoxPage } from './map-box.page';
import {AutoCompleteModule} from 'ionic4-auto-complete';

const routes: Routes = [
  {
    path: '',
    component: MapBoxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AutoCompleteModule
  ],
  declarations: []
})
export class MapBoxPageModule {}
