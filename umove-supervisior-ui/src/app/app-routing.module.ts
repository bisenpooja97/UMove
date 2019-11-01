import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'vehicle-list', loadChildren: './vehicle-list/vehicle-list.module#VehicleListPageModule' },
  { path: 'ride-detail', loadChildren: './ride-detail/ride-detail.module#RideDetailPageModule' },
  { path: 'end-ride-form/:rideId', loadChildren: './end-ride-form/end-ride-form.module#EndRideFormPageModule' },
  { path: 'error', loadChildren: './error/error.module#ErrorPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
