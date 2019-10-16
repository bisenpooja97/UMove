import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { VehicleDeatilsComponent } from './vehicle-deatils/vehicle-deatils.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule,
  MatButtonModule, MatPaginatorModule, MatSelectModule, MatOptionModule, MatDialogModule,
  MatToolbarModule, MatGridListModule, MatDatepicker, MatDatepickerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { UpdateVehiclesComponent } from './update-vehicles/update-vehicles.component';



@NgModule({
  declarations: [VehiclesComponent, VehicleDeatilsComponent, VehicleCardComponent, AddVehicleComponent, UpdateVehiclesComponent],
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


  ],
  entryComponents: [AddVehicleComponent, UpdateVehiclesComponent]
})
export class VehiclesModule { }
