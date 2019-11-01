import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resp } from 'src/app/model/user-response';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl  + environment.userBaseApi+ environment.userBaseApi;


  getUsers(): Observable<Resp> {
    console.log(this.baseUrl);
    return this.httpClient.get<Resp>(this.baseUrl  +  '?role=ROLE_USER');
  }

  getSupervisors(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl  + '?role=ROLE_SUPERVISOR');
  }

  getUsersById(id: string): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl + '/' + id);
  }

  updateUsersById(id: string, user: User) {
    console.log('Service ID', typeof id);
    console.log(`Base URL ${this.baseUrl}/${id}`);
    console.log('user data:', JSON.stringify(user));
    return this.httpClient.patch<User>(this.baseUrl + '/' + id, user);
  }

  public addUser(user: Resp) {
    return this.httpClient.post<Resp>(this.baseUrl + '/adduser', user);
  }

}
