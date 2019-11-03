import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label , Color } from 'ng2-charts';
import {ReportService} from '../service/report.service';
import {Ride} from '../../model/ride';

export interface VehcleData {
  vehcleName: string;
  count: number;
}

@Component({
  selector: 'app-bookings-vehicle-type',
  templateUrl: './bookings-vehicle-type.component.html',
  styleUrls: ['./bookings-vehicle-type.component.css']
})
export class BookingsVehicleTypeComponent implements OnInit {
  rides: Ride;
  response: Object;
  public vehcle: VehcleData[];
  data: 'data';
  vehcleName: string[] = [];
  vehcleNameCount: number[] = [];
  constructor(private reportService: ReportService) { }
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}], yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartColors: Color[] ;
  public barChartLabels: Label[];
  public barChartType: ChartType;
  public barChartLegend;
  public barChartData: ChartDataSets[];

  ngOnInit() {
    this.barChartColors = [

      { backgroundColor: '#ccd7f6' }
    ];

    this.barChartLabels = this.vehcleName;
    this.barChartType  = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      {data: this.vehcleNameCount, label: 'No Of Booking' }

    ];
    this.reportService.getNoOfBookingsVsVehicleType().subscribe(res => {
      this.response = res;
      console.log(this.response);
      this.vehcle = res.data;
      console.log(this.vehcle);
      for (const value of Object.values(this.vehcle)) {
        console.log('value', value);
        const x = value;
        // @ts-ignore
        this.vehcleNameCount.push(x);
      }
      for (const key of Object.keys(this.vehcle)) {
        console.log('key', key);
        const x = key;
        // @ts-ignore
        this.vehcleName.push(x);
      }
    });

    console.log('Name', this.vehcleName);
    console.log('Name Count', this.vehcleNameCount);


  }

  addData() {
    this.reportService.getNoOfBookingsVsVehicleType().subscribe(res => {
      this.response = res;
      console.log(this.response);
      this.vehcle = res.data;
      console.log(this.vehcle);
      for (const value of Object.values(this.vehcle)) {
        console.log(value);
        for (const key of Object.keys(value) ) {
          console.log('loop man aa gaya');
          console.log(key);
          this.vehcleName.push(key);
          this.vehcleNameCount.push(value[key]);
        }
      }
    });
    console.log('count  333333333333333', this.vehcleNameCount);
    console.log('Name  333333333333333', this.vehcleName);
  }

}
