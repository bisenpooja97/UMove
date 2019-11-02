import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.baseUrl + environment.reportService + environment.reportBaseApi;
  bookingCount = 'bookingcount';
  getBookingCount(date): Observable<any> {
    console.log('url' + this.baseUrl);
    return this.httpClient.get<any>(this.baseUrl + this.bookingCount, {params:{"date": date}});
  }
}
