import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {ChartsModule} from "ng2-charts";
import { LineChartComponent } from './line-chart/line-chart.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {BookingsVehicleTypeComponent} from "./bookings-vehicle-type/bookings-vehicle-type.component";
import { BookingsZoneComponent } from './bookings-zone/bookings-zone.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [ReportComponent, BarChartComponent, LineChartComponent, BookingsVehicleTypeComponent, BookingsZoneComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ChartsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    FlexLayoutModule
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [BarChartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ReportModule { }
