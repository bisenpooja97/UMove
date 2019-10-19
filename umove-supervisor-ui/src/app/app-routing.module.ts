import { NgModule } from '@angular/core';
import {VehicleListPage} from './vehicle-list/vehicle-list.page';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: VehicleListPage },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'vehicle-list', loadChildren: './vehicle-list/vehicle-list.module#VehicleListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
