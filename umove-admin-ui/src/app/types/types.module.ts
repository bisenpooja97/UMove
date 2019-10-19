import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types.component';
import { VehicleTypeCardComponent } from './vehicle-type-card/vehicle-type-card.component';
import { MatButtonModule, MatFormFieldModule,
  MatInputModule, MatCardModule, MatIconModule, MatPaginatorModule,
  MatSelectModule, MatOptionModule, MatDialogModule, MatToolbarModule, MatGridListModule, MatDatepickerModule, 
   } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { TypeDeatilsComponent } from './type-deatils/type-deatils.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVehicleTypeComponent } from './add-vehicle-type/add-vehicle-type.component';
import { UpdateTypesComponent } from './update-types/update-types.component';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [TypesComponent, VehicleTypeCardComponent, TypeDeatilsComponent, AddVehicleTypeComponent, UpdateTypesComponent],
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
    MatButtonModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
   // MatDatepicker,
    MatDatepickerModule,
    AvatarModule,


  ],
  entryComponents: [AddVehicleTypeComponent,UpdateTypesComponent]

})


export class TypesModule { }
