import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types.component';
import { VehicleTypeCardComponent } from './vehicle-type-card/vehicle-type-card.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatPaginatorModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { TypeDeatilsComponent } from './type-deatils/type-deatils.component';

@NgModule({
  declarations: [TypesComponent, VehicleTypeCardComponent, TypeDeatilsComponent],
  imports: [
    CommonModule,
    TypesRoutingModule,
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


export class TypesModule { }
