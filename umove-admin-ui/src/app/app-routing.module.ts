import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuardService } from './authentication/service/auth-guard.service';
import { SupervisorComponent } from './users/supervisor/supervisor.component';


const routes: Routes = [
{ path: 'fuel', loadChildren: () => import('./fuel/fuel.module').then(m => m.FuelModule), canActivate: [AuthGuardService] },
{ path: 'documents', loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule),
 canActivate: [AuthGuardService] },
{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
{ path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
{ path: 'zones', loadChildren: () => import('./zones/zones.module').then(m => m.ZonesModule) , canActivate: [AuthGuardService]},
{ path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
{ path: 'types', loadChildren: () => import('./types/types.module').then(m => m.TypesModule), canActivate: [AuthGuardService] },
{ path: 'vehicles', loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule), canActivate: [AuthGuardService] },
{ path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
{ path: '**', component: PageNotFoundComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
