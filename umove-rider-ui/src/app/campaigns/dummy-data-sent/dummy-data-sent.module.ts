import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DummyDataSentPage } from './dummy-data-sent.page';

const routes: Routes = [
  {
    path: '',
    component: DummyDataSentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DummyDataSentPage]
})
export class DummyDataSentPageModule {}
