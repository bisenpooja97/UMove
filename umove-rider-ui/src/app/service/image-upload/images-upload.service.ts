import { Injectable } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesUploadService {
  baseUrl = environment.baseUrl + environment.userService + environment.usersBaseApi;
  document = 'document';
  uploadImage = 'uploadImage';

  constructor(private http: HTTP ) {

  }

  public uploadProfileById(id, data) {
    return this.http.post(this.baseUrl + '/' + this.document + '/' + this.uploadImage + '?uid=' + id, data, {});
  }
}
