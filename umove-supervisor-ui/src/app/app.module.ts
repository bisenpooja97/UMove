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
import { HTTP } from '@ionic-native/http/ngx';
import {VehicleListPageModule} from "./vehicle-list/vehicle-list.module";

@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [BrowserModule, VehicleListPageModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
      HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
