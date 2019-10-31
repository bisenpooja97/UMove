import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { HTTP } from '@ionic-native/http/ngx';

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
  addser = 'adduser';

    constructor(private http: HTTP , private httpc: HttpClient) {
        http.setDataSerializer('json');
        http.setHeader('*', 'Content-Type', 'application/json');
    }

    public addUser(data) {
      return this.http.post(this.baseUrl + '/' + this.addser, data, {});
    }
    public getUserDetailById(id) {
      // console.log('url : ' + this.baseUrl  + '/' + id);
      return this.http.get(this.baseUrl + '/' + id, {}, {});
    }

  public editProfileById(id, data) {
    return this.http.patch(this.baseUrl + '/' + id, data, {});
  }
  // public uploadProfileById(id, data) {
  //   return this.http.post(this.baseUrl + '/' + this.document + '/' + this.uploadImage + '?uid=' + id, data, {});
  // }
    public uploadProfileById(id: string, data): Observable<any> {
        // console.log('url: ' + this.baseUrl + this.users + '/' + id);
        return this.httpc.post(this.baseUrl + '/' + this.document + '/' + this.uploadImage + '?uid=' + id, data);
    }
  public uploadDldetailsById(id, data) {
    return this.http.patch(this.baseUrl + '/' + id, data, {});
  }
}
