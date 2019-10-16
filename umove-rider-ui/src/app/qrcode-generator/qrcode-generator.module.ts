import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QrcodeGeneratorPage } from './qrcode-generator.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

const routes: Routes = [
  {
    path: '',
    component: QrcodeGeneratorPage
  }
];

@NgModule({
  imports: [
    NgxQRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QrcodeGeneratorPage]
})
export class QrcodeGeneratorPageModule { }
