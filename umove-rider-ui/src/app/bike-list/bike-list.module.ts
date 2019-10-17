import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BikeListPage } from './bike-list.page';
import { AppModule } from '../app.module';
import {BikeComponent} from '../bike/bike.component';

const routes: Routes = [
  {
    path: '',
    component: BikeListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    BikeComponent
  ],
  declarations: [BikeComponent]
})
export class BikeListPageModule { }
