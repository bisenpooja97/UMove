import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonesRoutingModule } from './zones-routing.module';
import { ZonesComponent } from './zones.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ZonesComponent],
  imports: [
    CommonModule,
    ZonesRoutingModule,
    FlexLayoutModule
  ]
})
export class ZonesModule { }
