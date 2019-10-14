import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DummyPaymentMethodPage } from './dummy-payment-method.page';

const routes: Routes = [
  {
    path: '',
    component: DummyPaymentMethodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DummyPaymentMethodPage]
})
export class DummyPaymentMethodPageModule {}
