import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resp } from 'src/model/user-response';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl + environment.userBaseApi;

  getUsers(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl + '/' +  '?role=User');
  }

  getSupervisors(): Observable<Resp> {
    return this.httpClient.get<Resp>(this.baseUrl + '/' + '?role=Supervisor');
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
