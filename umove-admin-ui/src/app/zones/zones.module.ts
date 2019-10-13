import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonesRoutingModule } from './zones-routing.module';
import { ZonesComponent } from './zones.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchZoneComponent } from './search-zone/search-zone.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatPaginatorModule } from '@angular/material';
import { ZoneCardComponent } from './zone-card/zone-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ZoneDetailsComponent } from './zone-details/zone-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [ZonesComponent, SearchZoneComponent, ZoneCardComponent, ZoneDetailsComponent],
  imports: [
    CommonModule,
    ZonesRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class ZonesModule { }
