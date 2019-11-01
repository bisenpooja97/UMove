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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [ReportComponent, BarChartComponent, LineChartComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ChartsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
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
