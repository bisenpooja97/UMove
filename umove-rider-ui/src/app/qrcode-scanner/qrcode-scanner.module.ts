import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QrcodeScannerPage } from './qrcode-scanner.page';
import { MbscModule } from '@mobiscroll/angular';

const routes: Routes = [
  {
    path: '',
    component: QrcodeScannerPage
  }
];

@NgModule({
  imports: [
    MbscModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QrcodeScannerPage]
})
export class QrcodeScannerPageModule { }
