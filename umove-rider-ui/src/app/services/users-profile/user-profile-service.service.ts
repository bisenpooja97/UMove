import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileServiceService {

  // baseUrl = environment.baseUrl + environment.userService + environment.userBaseApi;
  // baseUrl = environment.baseUrl + environment.userService;
  // baseUrl = 'http://172.23.234.95:8091/api/v1/';
  baseUrl = environment.baseUrl + environment.userService + environment.usersBaseApi;
  // baseUrl = 'http://localhost:8091/api/v1/';
  users = 'users';
  document = 'document';
  uploadImage = 'uploadImage';

  constructor(private http: HttpClient) {}

  public getUserDetailById(id: string): Observable<any> {
    console.log('url : ' + this.baseUrl  + '/' + id);
    return this.http.get(this.baseUrl + '/' + id);
  }

  // public editProfileById(id: string, data): Observable<any> {
  //   console.log('url: ' + this.baseUrl + this.users + '/' + id);
  //   return this.http.patch(this.baseUrl + this.users + '/' + id, data);
  // }
  //
  // public uploadProfileById(id: string, data): Observable<any> {
  //   console.log('url: ' + this.baseUrl + this.users + '/' + id);
  //   return this.http.post(this.baseUrl + this.users + '/' + this.document + '/' + this.uploadImage + '?uid=' + id, data);
  // }
  // public uploadDldetailsById(id: string, data): Observable<any> {
  //   console.log('url: ' + this.baseUrl + this.users + '/' + id);
  //   return this.http.patch(this.baseUrl + this.users + '/' + id, data);
  // }
}
