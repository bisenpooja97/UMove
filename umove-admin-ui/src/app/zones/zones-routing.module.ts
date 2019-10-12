import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonesComponent } from './zones.component';

const routes: Routes = [{ path: '', component: ZonesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZonesRoutingModule { }
