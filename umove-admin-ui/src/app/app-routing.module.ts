import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthGuardService } from './authentication/service/auth-guard.service';


// tslint:disable-next-line: max-line-length
const routes: Routes = [{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
{ path: 'documents', loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule) },

{ path: 'zones', loadChildren: () => import('./zones/zones.module').then(m => m.ZonesModule) },
{ path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
{ path: 'types', loadChildren: () => import('./types/types.module').then(m => m.TypesModule) },
{ path: 'vehicles', loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule) },
{ path: '**', component: PageNotFoundComponent, canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
