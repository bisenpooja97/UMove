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
import {BikeListPage} from './bike-list/bike-list.page';
import {BikeListPageModule} from './bike-list/bike-list.module';
import {AutoCompleteModule} from 'ionic4-auto-complete';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home/home.page';
import {HomePageModule} from './home/home.module';
import {DropPageModule} from './drop/drop.module';
import {DropPage} from './drop/drop.page';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserProfileServiceService} from './service/users-profile/user-profile-service.service';
import {ReactiveFormsModule} from '@angular/forms';
import {Environment} from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import {UserPaymentMethodService} from './service/user-payment-method/user-payment-method.service';
import {IonicStorageModule} from '@ionic/storage';
import {CampaignService} from './service/campaign-service/campaign.service';

@NgModule({
  declarations: [AppComponent, BikeListPage, DropPage],
  entryComponents: [],
  imports: [
    MbscModule,
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule,
    AppRoutingModule,
      BikeListPageModule,
      AutoCompleteModule,
      HomePageModule,
      DropPageModule,
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
      CampaignService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
    exports: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
