import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuelComponent } from './fuel.component';
import { FuelDetailsComponent } from './fuel-details/fuel-details.component';

const routes: Routes = [{ path: '', component: FuelComponent },
{path: ':name', component:FuelDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelRoutingModule { }
