import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowCampaignsListPage } from './show-campaigns-list.page';

const routes: Routes = [
  {
    path: '',
    component: ShowCampaignsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowCampaignsListPage]
})
export class ShowCampaignsListPageModule {}
