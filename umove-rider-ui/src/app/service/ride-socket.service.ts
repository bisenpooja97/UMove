import { Injectable } from '@angular/core';
import * as Stomp from 'webstomp-client';
import * as SockJS from 'node_modules/sockjs-client/dist/sockjs.min.js';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideSocketService {

  SERVER_URL = 'http://13.235.35.202:8094/ws';

  private stompClient;
  private ws;

  constructor() { }

  public connect(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ws = new SockJS(this.SERVER_URL);
      this.stompClient = Stomp.over(this.ws);
      this.stompClient.connect({},
          (result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          });
    });
  }

  public subscribeTopic(topic: string): Observable<any> {
    return new Observable(observer => {
      this.stompClient.subscribe(topic, (message) => observer.next(JSON.parse(message.body)));
    });
  }

  public disconnect() {
    if (this.ws != null) {
      this.ws.close();
    }
    console.log('Disconnected');
  }

}
