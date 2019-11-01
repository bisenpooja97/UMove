import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { CountDisplayComponent } from './count-display/count-display.component';


@NgModule({
  declarations: [DashboardComponent, CountDisplayComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class DashboardModule { }
