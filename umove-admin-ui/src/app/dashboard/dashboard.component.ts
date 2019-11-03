import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label, Color } from 'ng2-charts';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  busy: number;
  free: number;
  noMoreInUse: number;
  servicing: number;
  stolen: number;
  barCount: number[] = [];
  barLabel: string[] = [];
  pieCount: number[] = [];
  pieLabel: string[] = [];

  constructor(
    private dashboardService: DashboardService
  ) { }

  public barChartOptions: ChartOptions = {
  responsive: true,
  scales: { xAxes: [{}], yAxes: [{
   ticks: {
     beginAtZero: true
 }
  }] },
  plugins: {
    datalabels: {
      anchor: 'end',
      align: 'end',
    }
  }
};
​
public barChartLabels: Label[];
public barChartType: ChartType;
public barChartLegend ;
public barChartPlugins ;
public barChartData: ChartDataSets[];
public barChartColors: Color[] ;
​
// pie
​
public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
  }
};
public pieChartLabels: Label[];
public pieChartData: number[];
public pieChartType: ChartType;
public pieChartLegend;
public pieChartPlugins;
public pieChartColors;
​
ngOnInit() {
// bar
  this.getBarData();
  this.barChartType = 'bar';
  this.barChartLegend = true;
  this.barChartPlugins = [pluginDataLabels];
  this.barChartData = [
    {data: this.barCount, label: 'Count'}
  ];
  this.barChartLabels = this.barLabel;
  this.barChartColors = [
  { backgroundColor: '#ccd7f6' }
  ];
​
  // pie
  this.getPieData();
  this.pieChartType = 'pie';
  this.pieChartLegend = true;
  this.pieChartPlugins = [pluginDataLabels];
  this.pieChartLabels = this.pieLabel;
  this.pieChartData = this.pieCount;
  this.pieChartColors = [
    {
      backgroundColor: ['#ccd7f6', '#dab0a4', '#f9ce80', '#d1f4a7'],
    }
  ];
​
  }
​
getBarData() {
  this.dashboardService.getVehicleByStatus('Busy').subscribe(res => { this.busy = res.count;
                                                                      this.barCount.push(res.count);
                                                                      this.barLabel.push('Busy');

} );
  this.dashboardService.getVehicleByStatus('No_More_In_Use').subscribe(res => { this.noMoreInUse = res.count;
                                                                                this.barCount.push(res.count);
                                                                                this.barLabel.push('No_More_In_Use');
} );
  this.dashboardService.getVehicleByStatus('Stolen').subscribe(res => { this.stolen = res.count;
                                                                        this.barCount.push(res.count);
                                                                        this.barLabel.push('Stolen');
                                                                    } );
  this.dashboardService.getVehicleByStatus('Free').subscribe(res => { this.free = res.count;
                                                                      this.barCount.push(res.count);
                                                                      this.barLabel.push('Free');
} );
  this.dashboardService.getVehicleByStatus('Servicing').subscribe(res => { this.servicing = res.count;
                                                                           this.barCount.push(res.count);
                                                                           this.barLabel.push('Servicing');
                                                                      } );

}
​
getPieData() {
  this.dashboardService.getZoneByStatus('ACTIVE').subscribe(res => { this.pieCount.push(res.count);
                                                                     this.pieLabel.push('Active');
 });
  this.dashboardService.getZoneByStatus('INACTIVE').subscribe(res => { this.pieCount.push(res.count);
                                                                       this.pieLabel.push('InActive');
});
  this.dashboardService.getZoneByStatus('FULL').subscribe(res => { this.pieCount.push(res.count);
                                                                   this.pieLabel.push('Full');
});
  this.dashboardService.getZoneByStatus('INMAINTAINANCE').subscribe(res => { this.pieCount.push(res.count);
                                                                             this.pieLabel.push('InMaintaince');
});
}

}
