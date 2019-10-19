import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonesComponent } from './zones.component';
import { AuthGuardService } from '../authentication/service/auth-guard.service';
import { ZoneDetailsComponent } from './zone-details/zone-details.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [{ path: '', component: ZonesComponent},
{path: ':name', component: ZoneDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZonesRoutingModule { }
