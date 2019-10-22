import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {BikeListPage} from './bike-list/bike-list.page';
import {HomePage} from "./home/home.page";
import {DropPage} from "./drop/drop.page";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'} ,
   { path: 'home', component: HomePage},
   { path: 'bikelist', component: BikeListPage},
    { path:'drop',component:DropPage},
    { path: 'confirm-ride-detail', loadChildren: './confirm-ride-detail/confirm-ride-detail.module#ConfirmRideDetailPageModule' },
    { path: 'dummy-promocode', loadChildren: './dummy-promocode/dummy-promocode.module#DummyPromocodePageModule' },
    { path: 'ride-booking-details', loadChildren: './ride-booking-details/ride-booking-details.module#RideBookingDetailsPageModule' },
    { path: 'ride-details', loadChildren: './ride-details/ride-details.module#RideDetailsPageModule' },
    // tslint:disable-next-line:max-line-length
    { path: 'dummy-destination-zone', loadChildren: './dummy-destination-zone/dummy-destination-zone.module#DummyDestinationZonePageModule' },
    { path: 'qrcode-generator', loadChildren: './qrcode-generator/qrcode-generator.module#QrcodeGeneratorPageModule' },
    { path: 'qrcode-scanner', loadChildren: './qrcode-scanner/qrcode-scanner.module#QrcodeScannerPageModule' },
    // { path: 'payment-detail', loadChildren: './payment-detail/payment-detail.module#PaymentDetailPageModule' },
    { path: 'my-rides', loadChildren: './my-rides/my-rides.module#MyRidesPageModule' },
    { path: 'my-rides-details/:rideId', loadChildren: './my-rides-details/my-rides-details.module#MyRidesDetailsPageModule' },
    { path: 'payment-detail/:rideId', loadChildren: './payment-details/payment-details.module#PaymentDetailsPageModule' },
  { path: 'view-profile', loadChildren: './user-profile/view-profile/view-profile.module#ViewProfilePageModule' },
  { path: 'edit-profile', loadChildren: './user-profile/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'update-kyc', loadChildren: './user-profile/update-kyc/update-kyc.module#UpdateKycPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'verify', loadChildren: './auth/verify/verify.module#VerifyPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'add-payment-method', loadChildren: './user-payment-method/add-payment-method/add-payment-method.module#AddPaymentMethodPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'show-payment-method', loadChildren: './user-payment-method/show-payment-method/show-payment-method.module#ShowPaymentMethodPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
