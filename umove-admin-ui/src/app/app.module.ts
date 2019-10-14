import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
 MatButtonModule,
 MatCardModule,
  MatInputModule,
 MatIconModule,
 MatMenuModule,
MatNativeDateModule,
 MatToolbarModule,
MatSortModule, MatAutocompleteModule,
  MatSidenavModule,
   MatListModule,
    MatTableModule,
     MatPaginatorModule,
     MatSelectModule,
     MatSnackBarModule,
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatSortModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
