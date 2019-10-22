import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [{ path: '', component: AuthenticationComponent },
{path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]},
{path: 'login', component: AuthenticationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
