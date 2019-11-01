import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignsComponent } from './campaigns.component';
import { CampaignsDetailsComponent } from './campaigns-details/campaigns-details.component';

const routes: Routes = [{ path: '', component: CampaignsComponent },
{path: 'details/:id', component: CampaignsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CampaignsRoutingModule { }
