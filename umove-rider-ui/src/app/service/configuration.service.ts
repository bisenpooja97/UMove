import { Injectable } from '@angular/core';
import { Configuration } from '../model/configuration';
import { HTTP } from '@ionic-native/http/ngx';
import { ToastController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  configuration: Configuration;
  baseUrl = environment.baseUrl + environment.bookingService + environment.configBaseApi;

  constructor(private http: HTTP, private toastController: ToastController) {
    this.configuration = new Configuration();
    http.setDataSerializer('json');
    http.setHeader('*', 'Content-Type', 'application/json');
  }

  async presentToast(msg, duration) {
    const toast = await this.toastController.create({
      message: msg,
      duration
    });
    toast.present();
  }

  getConfigurationDetailsByName(configName: string) {
    return this.http.get(this.baseUrl + '/' + configName, {}, {});
  }
}
