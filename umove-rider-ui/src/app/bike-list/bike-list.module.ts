import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BikeListPage } from './bike-list.page';
import { AppModule } from '../app.module';

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
    AppModule
  ],
  declarations: []
})
export class BikeListPageModule { }
