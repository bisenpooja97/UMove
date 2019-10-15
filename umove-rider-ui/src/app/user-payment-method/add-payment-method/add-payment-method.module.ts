import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddPaymentMethodPage } from './add-payment-method.page';

const routes: Routes = [
  {
    path: '',
    component: AddPaymentMethodPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
  declarations: [AddPaymentMethodPage]
})
export class AddPaymentMethodPageModule {}
