import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resp } from 'src/model/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl + environment.userBaseApi;

  getUsers(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl);
  }


}
