import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonesRoutingModule } from './zones-routing.module';
import { ZonesComponent } from './zones.component';


@NgModule({
  declarations: [ZonesComponent],
  imports: [
    CommonModule,
    ZonesRoutingModule
  ]
})
export class ZonesModule { }
