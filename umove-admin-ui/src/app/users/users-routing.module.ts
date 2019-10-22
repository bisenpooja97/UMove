import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Supervisor } from '../model/supervisor';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { AuthGuardService } from '../authentication/service/auth-guard.service';

const routes: Routes = [
  { path: '', component: UsersComponent },
  {path: 'details/:id', component: UserDetailsComponent},
  {path: 'supervisor', component: SupervisorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
