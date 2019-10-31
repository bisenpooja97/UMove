import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resp } from 'src/app/model/user-response';
import { User } from 'src/app/model/user';
import {Document} from 'src/app/model/document';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {


  constructor(private httpClient: HttpClient) { }
  baseUrl = environment.baseUrl + environment.userService + environment.userBaseApi;

  getUsers(): Observable<Resp> {
    console.log(this.baseUrl + '/' +  '?role=User&documentStatus=Pending');
    return this.httpClient.get<Resp>(this.baseUrl  +  '?role=User&documentStatus=Pending');
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

  // getUsersByStatus(id:string,document:Document):Observable<Resp>{


  // }


}
