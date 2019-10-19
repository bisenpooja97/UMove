import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MapBoxPage} from './map-box/map-box.page';
import {BikeListPage} from './bike-list/bike-list.page';
import {BikeListPageModule} from './bike-list/bike-list.module';
import {AutoCompleteModule} from 'ionic4-auto-complete';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MapBoxPage, BikeListPage],
  entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        BikeListPageModule,
        AutoCompleteModule,
        FormsModule
    ],
    providers: [
        HTTP,
        Geolocation,
        StatusBar,
        LaunchNavigator,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],

  exports: [
    MapBoxPage,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
