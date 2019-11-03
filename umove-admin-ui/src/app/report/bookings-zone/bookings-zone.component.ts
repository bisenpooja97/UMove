import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {ReportService} from "../service/report.service";
import {Ride} from "../../model/ride";
import {VehcleData} from "../bookings-vehicle-type/bookings-vehicle-type.component";

export interface ZoneData {
  zoneName:string;
  count:number;
}

@Component({
  selector: 'app-bookings-zone',
  templateUrl: './bookings-zone.component.html',
  styleUrls: ['./bookings-zone.component.css']
})
export class BookingsZoneComponent implements OnInit {

  rides : Ride;
  response:Object;
  public zone : ZoneData[];
  data : 'data';
  zoneName : string[] = [];
  zoneNameCount : number[]= [];

  constructor(private reportService: ReportService) { }
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{ticks: {

          fontSize: 32
        }}], yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: 32
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
  public barChartColors:Color[] ;
  public barChartLabels: Label[];
  public barChartType: ChartType;
  public barChartLegend;
  public barChartData: ChartDataSets[];

  ngOnInit() {
    this.barChartColors = [

      { backgroundColor: '#ccd7f6' }
    ];
    this.barChartLabels = this.zoneName;
    this.barChartType  = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      {data:this.zoneNameCount, label: 'No Of Booking' }

    ];
    this.reportService.getNoOfBookingsVsZoneType().subscribe(res => {
      this.response = res;
      console.log(this.response);
      this.zone = res['data'];
      console.log(this.zone);
      for(const value of Object.values(this.zone)){
        console.log("value",value);
        let x= value;
        // @ts-ignore
        this.zoneNameCount.push(x);
      }

      for(const key of Object.keys(this.zone)){
      console.log("key",key);
      let x= key;
      // @ts-ignore
      this.zoneName.push(x);
    }
  });

  console.log("Name",this.zoneName);
  console.log("Name Count",this.zoneNameCount);



  }



}
