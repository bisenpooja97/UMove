import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DummyPromocodePage } from './dummy-promocode.page';

const routes: Routes = [
  {
    path: '',
    component: DummyPromocodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DummyPromocodePage]
})
export class DummyPromocodePageModule {}
