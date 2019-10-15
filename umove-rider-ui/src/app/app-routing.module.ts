import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
