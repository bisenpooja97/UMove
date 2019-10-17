import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DocumentApprovalComponent } from './document-approval/document-approval.component';

const routes: Routes = [{ path: '', component: UsersComponent },
{path: ':id', component: UserDetailsComponent},
{path: 'document/:id', component: DocumentApprovalComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
