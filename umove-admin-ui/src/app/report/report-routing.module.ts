import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {LineChartComponent} from './line-chart/line-chart.component';


const routes: Routes =
  [{ path: '', component: ReportComponent },
    {path: 'bar-chart', component: BarChartComponent},
    {path: 'line-chart', component: LineChartComponent},
    ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
