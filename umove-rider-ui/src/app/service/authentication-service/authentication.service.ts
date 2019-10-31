import { Injectable } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = environment.baseUrl + environment.userService + '/v1/api/user/login';
  // baseUrl = 'http://localhost:8091/api/v1/';
  users = 'users';

  constructor(private http: HTTP, private httpc: HttpClient) {
    http.setDataSerializer('json');
    http.setHeader('*', 'Content-Type', 'application/json');
  }
  public addUser(data) {
    return this.http.post(this.baseUrl , data, {});
  }

}
