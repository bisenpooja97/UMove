import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'types', loadChildren: () => import('./types/types.module').then(m => m.TypesModule) },
{ path: 'vehicles', loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule) },
{ path: 'fuel', loadChildren: () => import('./fuel/fuel.module').then(m => m.FuelModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
