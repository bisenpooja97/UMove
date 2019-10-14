import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthGuardService } from './authentication/service/auth-guard.service';


export const routes: Routes = [
{ path: 'zones', loadChildren: () => import('./zones/zones.module').then(m => m.ZonesModule) },
{ path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
{path: '**', component: PageNotFoundComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
