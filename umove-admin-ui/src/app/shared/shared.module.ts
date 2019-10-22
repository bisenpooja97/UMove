import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [PageNotFoundComponent]
})
export class SharedModule { }
