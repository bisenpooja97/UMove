import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { DocumentCardComponent } from './document-card/document-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule,
   MatPaginatorModule, MatDialogModule, MatSelectModule, MatOptionModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateKycComponent } from './update-kyc/update-kyc.component';


@NgModule({
  declarations: [DocumentsComponent, DocumentCardComponent, UpdateKycComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
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
    MatToolbarModule
  ],
  entryComponents: [UpdateKycComponent]
})
export class DocumentsModule { }
