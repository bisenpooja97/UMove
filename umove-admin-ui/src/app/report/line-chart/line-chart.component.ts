import { Component, OnInit } from '@angular/core';
import {ReportService} from "../service/report.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  data : any;
  constructor(private reportService: ReportService,private router: Router) { }
  startDate = new Date();
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = ['12AM','1AM','2AM', '3AM', '4AM', '5AM', '6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM','12PM'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    {data: [], label: 'No of Bookings'},
  ];
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: '#0000FF',
      //backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"],
    }];

  ngOnInit() {
    this.reportService.getBookingCount(this.startDate.toISOString().slice(0, 10))
      .subscribe(response => {
        this.data = response;
        this.lineChartData[0].data = this.data.data;
      });
  }
  updateStartDate(date: any) {
    var newDate = new Date(date.value);
    newDate.setDate (newDate.getDate() + 1);
    this.reportService.getBookingCount(newDate.toISOString().slice(0, 10))
      .subscribe(response => {
        this.data = response;
        this.lineChartData[0].data = this.data.data;
      });
  }
}
