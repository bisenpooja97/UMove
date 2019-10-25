import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelRoutingModule } from './fuel-routing.module';
import { FuelComponent } from './fuel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule,
   MatPaginatorModule, MatSelectModule, MatOptionModule, MatDialogModule, MatToolbarModule, MatGridListModule,
    MatDatepickerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuelCardComponent } from './fuel-card/fuel-card.component';
import { AddFuelComponent } from './add-fuel/add-fuel.component';
import { UpdateFuelComponent } from './update-fuel/update-fuel.component';
import { FuelDetailsComponent } from './fuel-details/fuel-details.component';
import { AvatarModule } from 'ngx-avatar';


@NgModule({
  declarations: [FuelComponent, FuelCardComponent, AddFuelComponent, UpdateFuelComponent, FuelDetailsComponent],
  imports: [
    CommonModule,
    FuelRoutingModule,
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
    AvatarModule,
    MatDatepickerModule,
  ],
  entryComponents: [AddFuelComponent, UpdateFuelComponent]
})
export class FuelModule { }
