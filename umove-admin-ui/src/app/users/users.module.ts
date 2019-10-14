import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatPaginatorModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [UsersComponent, UserCardComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
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
    MatDialogModule

  ]
})
export class UsersModule { }
