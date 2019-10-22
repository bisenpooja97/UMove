import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule,
  MatPaginatorModule, MatDialogModule, MatSelectModule, MatOptionModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { SupervisorComponent } from './supervisor/supervisor.component';


@NgModule({
  declarations: [UsersComponent, UserCardComponent, UserDetailsComponent, AddUserComponent, SupervisorComponent],
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
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  entryComponents: [AddUserComponent]
})
export class UsersModule { }
