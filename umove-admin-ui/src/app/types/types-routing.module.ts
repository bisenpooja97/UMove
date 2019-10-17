import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypesComponent } from './types.component';
import { TypeDeatilsComponent } from './type-deatils/type-deatils.component';

const routes: Routes = [{ path: '', component: TypesComponent },
{path: ':name', component: TypeDeatilsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRoutingModule { }
