import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
 import {BikeListPage} from './bike-list/bike-list.page';
import {MapBoxPage} from './map-box/map-box.page';

const routes: Routes = [
  {path: '', component: MapBoxPage},
   {path: 'bikelist', component: BikeListPage},
    { path: 'confirm-ride-detail', loadChildren: './confirm-ride-detail/confirm-ride-detail.module#ConfirmRideDetailPageModule' },
    { path: 'dummy-payment-method', loadChildren: './dummy-payment-method/dummy-payment-method.module#DummyPaymentMethodPageModule' },
    { path: 'dummy-promocode', loadChildren: './dummy-promocode/dummy-promocode.module#DummyPromocodePageModule' },
    { path: 'ride-booking-details', loadChildren: './ride-booking-details/ride-booking-details.module#RideBookingDetailsPageModule' },
    { path: 'ride-details', loadChildren: './ride-details/ride-details.module#RideDetailsPageModule' },
    { path: 'dummy-destination-zone', loadChildren: './dummy-destination-zone/dummy-destination-zone.module#DummyDestinationZonePageModule' },
    { path: 'qrcode-generator', loadChildren: './qrcode-generator/qrcode-generator.module#QrcodeGeneratorPageModule' },
    { path: 'qrcode-scanner', loadChildren: './qrcode-scanner/qrcode-scanner.module#QrcodeScannerPageModule' },
    // { path: 'payment-detail', loadChildren: './payment-detail/payment-detail.module#PaymentDetailPageModule' },
    { path: 'my-rides', loadChildren: './my-rides/my-rides.module#MyRidesPageModule' },
    { path: 'my-rides-details/:rideId', loadChildren: './my-rides-details/my-rides-details.module#MyRidesDetailsPageModule' },
    { path: 'payment-detail/:rideId', loadChildren: './payment-details/payment-details.module#PaymentDetailsPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
