import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonesComponent } from './zones.component';
import { AuthGuardService } from '../authentication/service/auth-guard.service';

const routes: Routes = [{ path: '', component: ZonesComponent, canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZonesRoutingModule { }
