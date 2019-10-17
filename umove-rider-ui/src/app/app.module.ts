import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserProfileServiceService} from './services/users-profile/user-profile-service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Environment} from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import {HTTP} from '@ionic-native/http/ngx';
import {UserPaymentMethodService} from './services/user-payment-method/user-payment-method.service';


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
      HTTP,
    UserProfileServiceService,
    UserPaymentMethodService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
