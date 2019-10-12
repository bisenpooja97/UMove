import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {BikeListPage} from './bike-list/bike-list.page';
import {MapBoxPage} from './map-box/map-box.page';

const routes: Routes = [
  {path: 'home', component: MapBoxPage},
  {path: 'bikelist', component: BikeListPage},
  { path: 'home-module', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
