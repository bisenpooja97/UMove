import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonesRoutingModule } from './zones-routing.module';
import { ZonesComponent } from './zones.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchZoneComponent } from './search-zone/search-zone.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [ZonesComponent, SearchZoneComponent],
  imports: [
    CommonModule,
    ZonesRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ZonesModule { }
