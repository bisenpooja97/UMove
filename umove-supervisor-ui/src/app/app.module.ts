import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {VehicleListPage} from './vehicle-list/vehicle-list.page';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {VehicleComponent} from './vehicle/vehicle.component';
import {HttpClient, HttpClientModule, HttpEventType} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, VehicleComponent, VehicleListPage],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
