import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {BikeListPage} from './bike-list/bike-list.page';
import {HomePage} from './home/home.page';
import {DropPage} from './drop/drop.page';
import {AuthGuardService} from './service/auth-guard.service';

// tslint:disable-next-line:max-line-length
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'} ,
   { path: 'home', component: HomePage, canActivate: [AuthGuardService]},
   { path: 'bikelist', component: BikeListPage, canActivate: [AuthGuardService]},
    { path: 'drop', component: DropPage, canActivate: [AuthGuardService]},
    // tslint:disable-next-line:max-line-length
    { path: 'confirm-ride-detail', loadChildren: './confirm-ride-detail/confirm-ride-detail.module#ConfirmRideDetailPageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
    { path: 'dummy-promocode', loadChildren: './dummy-promocode/dummy-promocode.module#DummyPromocodePageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
    { path: 'ride-booking-details', loadChildren: './ride-booking-details/ride-booking-details.module#RideBookingDetailsPageModule', canActivate: [AuthGuardService] },
    { path: 'ride-details', loadChildren: './ride-details/ride-details.module#RideDetailsPageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
    { path: 'dummy-destination-zone', loadChildren: './dummy-destination-zone/dummy-destination-zone.module#DummyDestinationZonePageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
    { path: 'qrcode-generator', loadChildren: './qrcode-generator/qrcode-generator.module#QrcodeGeneratorPageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
    { path: 'qrcode-scanner', loadChildren: './qrcode-scanner/qrcode-scanner.module#QrcodeScannerPageModule', canActivate: [AuthGuardService] },
    // { path: 'payment-detail', loadChildren: './payment-detail/payment-detail.module#PaymentDetailPageModule' },
    { path: 'my-rides', loadChildren: './my-rides/my-rides.module#MyRidesPageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
    { path: 'my-rides-details/:rideId', loadChildren: './my-rides-details/my-rides-details.module#MyRidesDetailsPageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
    { path: 'payment-detail/:rideId', loadChildren: './payment-details/payment-details.module#PaymentDetailsPageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
  { path: 'view-profile', loadChildren: './user-profile/view-profile/view-profile.module#ViewProfilePageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
  { path: 'edit-profile', loadChildren: './user-profile/edit-profile/edit-profile.module#EditProfilePageModule', canActivate: [AuthGuardService] },
  { path: 'update-kyc', loadChildren: './user-profile/update-kyc/update-kyc.module#UpdateKycPageModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'verify', loadChildren: './auth/verify/verify.module#VerifyPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'add-payment-method', loadChildren: './user-payment-method/add-payment-method/add-payment-method.module#AddPaymentMethodPageModule', canActivate: [AuthGuardService] },
  // tslint:disable-next-line:max-line-length
  { path: 'show-payment-method', loadChildren: './user-payment-method/show-payment-method/show-payment-method.module#ShowPaymentMethodPageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
    { path: 'campaigns', loadChildren: './campaigns/show-campaigns-list/show-campaigns-list.module#ShowCampaignsListPageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
    { path: 'dummy-data-sent', loadChildren: './campaigns/dummy-data-sent/dummy-data-sent.module#DummyDataSentPageModule', canActivate: [AuthGuardService] },
    // tslint:disable-next-line:max-line-length
  { path: 'show-payment-method', loadChildren: './user-payment-method/show-payment-method/show-payment-method.module#ShowPaymentMethodPageModule', canActivate: [AuthGuardService] },
  { path: 'error', loadChildren: './error/error.module#ErrorPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
