import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HTTP} from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class UserPaymentMethodService {
  baseUrl = environment.baseUrl + environment.userService + environment.usersBaseApi;
  users = 'users';
  payments = 'payments';
  constructor(private http: HTTP) {
    http.setDataSerializer('json');
    http.setHeader('*', 'Content-Type', 'application/json');
  }
  getAllPaymentMethod(id) {
    console.log('url: ' + this.baseUrl + '/' + id + '/' + this.payments);
    return this.http.get(this.baseUrl + '/' + id + '/' + this.payments, {}, {});
  }
  deletePaymentMethod(id, pid) {
    console.log('url: ' + this.baseUrl + '/' + id + '/' + this.payments + '/' + pid);
    return this.http.delete(this.baseUrl + '/' + id + '/' + this.payments + '/' + pid, {}, {});
  }
  addPaymentMethod(id, data) {
    console.log('url: ' + this.baseUrl + this.users + '/' + id + this.payments);
    return this.http.post(this.baseUrl + '/' + id + '/' + this.payments, data, {});
  }
}
