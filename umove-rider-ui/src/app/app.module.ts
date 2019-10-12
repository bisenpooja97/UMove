import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BikeListPage} from './bike-list/bike-list.page';
import {BikeComponent} from './bike/bike.component';
import {MapBoxPage} from './map-box/map-box.page';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {WindowService} from './window.service';
import { HTTP } from '@ionic-native/http/ngx';
import {AuthGuardServiceService} from './auth-guard-service.service';
import {FormsModule} from '@angular/forms';
import { AutoCompleteModule } from 'ionic4-auto-complete';

@NgModule({
  declarations: [AppComponent, BikeComponent, MapBoxPage, BikeListPage],
  entryComponents: [],
  imports: [
    MbscModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AutoCompleteModule
  ],
  providers: [
  WindowService,
  AuthGuardServiceService,
  StatusBar,
  HTTP,
  SplashScreen,
  Dialogs,
  {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  ],
    exports: [
        MapBoxPage,
        BikeComponent,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
