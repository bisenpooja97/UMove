import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
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
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
