import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { MbscModule } from '@mobiscroll/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {SharedModule} from './shared/shared.module';
import {MapBoxPage} from './map-box/map-box.page';
import {BikeListPage} from './bike-list/bike-list.page';
import {BikeListPageModule} from './bike-list/bike-list.module';
import {AutoCompleteModule} from 'ionic4-auto-complete';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserProfileServiceService} from './services/users-profile/user-profile-service.service';
import {ReactiveFormsModule} from '@angular/forms';
import {Environment} from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import {UserPaymentMethodService} from './services/user-payment-method/user-payment-method.service';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [AppComponent, MapBoxPage, BikeListPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
      IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule,
    AppRoutingModule,
      BikeListPageModule,
      AutoCompleteModule,
      FormsModule,
      SharedModule,
      MbscModule
  ],
  providers: [
      HTTP,
      Geolocation,
      LaunchNavigator,
    StatusBar,
      BarcodeScanner,
    SplashScreen,
    HttpClient,
      HTTP,
    UserProfileServiceService,
    UserPaymentMethodService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
    exports: [
        MapBoxPage
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
