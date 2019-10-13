import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { VehicleDeatilsComponent } from './vehicle-deatils/vehicle-deatils.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [VehiclesComponent, VehicleDeatilsComponent, VehicleCardComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatButtonModule
  ]
})
export class VehiclesModule { }
