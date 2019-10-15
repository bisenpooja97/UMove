import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesComponent } from './vehicles.component';
import { VehicleDeatilsComponent } from './vehicle-deatils/vehicle-deatils.component';

const routes: Routes = [{ path: '', component: VehiclesComponent },
{path: ':registrationNo', component: VehicleDeatilsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
