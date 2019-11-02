import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ReportService} from "../service/report.service";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  data : any;
  constructor(private reportService: ReportService,private router: Router) { }
  startDate = new Date();
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    // size: {
    //   height: 50,
    //   width: 50
    // }
  };
  public barChartLabels = ['12AM TO 1AM','1AM TO 2AM','2AM TO 3AM', '3AM TO 4AM', '4AM TO 5AM', '5AM TO 6AM', '6AM TO 7AM','7AM TO 8AM','8AM TO 9AM','9AM TO 10AM','10AM TO 11AM','11AM TO 12PM','12PM TO 1PM','1PM TO 2PM','2PM TO 3PM','3PM TO 4PM','4PM TO 5PM','5PM TO 6PM','6PM TO 7PM','7PM TO 8PM','8PM TO 9PM','9PM TO 10PM','10PM TO 11PM','11PM TO 12AM'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{data: [], label:'No of Bookings'}];
  // public barChartData = [
  //   {data: [65, 102, 500, 601, 306, 202, 150,130,120,140,150,235,200,180,400,412,300,120,130], label: 'No of Bookings'},
  // ];
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: '#0000FF',
      //backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"],
    }];

  ngOnInit() {
    this.reportService.getBookingCount(this.startDate.toISOString().slice(0, 10))
      .subscribe(response => {
        this.data = response;
        console.log(this.data);
        this.barChartData[0].data = this.data.data;
        console.log(this.barChartData[0].data);
      });
  }
  updateStartDate(date: any) {
    var newDate = new Date(date.value);
    newDate.setDate (newDate.getDate() + 1);
    this.reportService.getBookingCount(newDate.toISOString().slice(0, 10))
      .subscribe(response => {
        this.data = response;
        this.barChartData[0].data = this.data.data;
      });
  }
}
