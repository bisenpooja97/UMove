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
  { path: 'dummy-promocode', loadChildren: './dummy-promocode/dummy-promocode.module#DummyPromocodePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
