import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'confirm-ride-detail',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },
  { path: 'confirm-ride-detail', loadChildren: './confirm-ride-detail/confirm-ride-detail.module#ConfirmRideDetailPageModule' },
  { path: 'dummy-payment-method', loadChildren: './dummy-payment-method/dummy-payment-method.module#DummyPaymentMethodPageModule' },
  { path: 'dummy-promocode', loadChildren: './dummy-promocode/dummy-promocode.module#DummyPromocodePageModule' },
  { path: 'ride-booking-details', loadChildren: './ride-booking-details/ride-booking-details.module#RideBookingDetailsPageModule' },
  { path: 'ride-details', loadChildren: './ride-details/ride-details.module#RideDetailsPageModule' },
  { path: 'dummy-destination-zone', loadChildren: './dummy-destination-zone/dummy-destination-zone.module#DummyDestinationZonePageModule' },
  { path: 'qrcode-generator', loadChildren: './qrcode-generator/qrcode-generator.module#QrcodeGeneratorPageModule' },
  { path: 'qrcode-scanner', loadChildren: './qrcode-scanner/qrcode-scanner.module#QrcodeScannerPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
