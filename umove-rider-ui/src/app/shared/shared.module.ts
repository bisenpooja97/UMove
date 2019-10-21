import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BikeDetailComponent} from '../bike-detail/bike-detail.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [BikeDetailComponent],
  imports: [
      IonicModule,
    CommonModule
  ],
  exports: [
      BikeDetailComponent
  ]
})
export class SharedModule { }
