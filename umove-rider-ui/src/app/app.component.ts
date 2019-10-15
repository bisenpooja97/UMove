import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Booking Details',
      url: '/ride-booking-details',
      icon: 'information-circle'
    },
    {
      title: 'Ride Details',
      url: '/ride-details',
      icon: 'information-circle'
    },
    {
      title: 'Scanner',
      url: '/qrcode-scanner',
      icon: 'qr-scanner'
    },
    {
      title: 'QR code',
      url: '/qrcode-generator',
      icon: 'qr-scanner'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
