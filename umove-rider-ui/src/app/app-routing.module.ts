import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ride-booking-details',
    pathMatch: 'full'
  },
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
