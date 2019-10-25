import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsComponent } from './campaigns.component';
import { CampaignCardComponent } from './campaign-card/campaign-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule,
  MatPaginatorModule, MatDialogModule, MatSelectModule, MatOptionModule, MatToolbarModule, MatDatepickerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';


@NgModule({
  declarations: [CampaignsComponent, CampaignCardComponent, AddCampaignComponent],
  imports: [
    CommonModule,
    CampaignsRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
     MatCardModule,
     HttpClientModule,
     MatIconModule,
     MatButtonModule,
     NgxPaginationModule,
     Ng2SearchPipeModule,
     MatPaginatorModule,
     MatDialogModule,
     MatSelectModule,
     MatOptionModule,
     FormsModule,
     ReactiveFormsModule,
     MatToolbarModule,
     MatDatepickerModule
  ],
  entryComponents: [AddCampaignComponent,],
})
export class CampaignsModule { }
