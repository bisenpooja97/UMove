import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import {AutoCompleteModule} from "ionic4-auto-complete";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: 'home',
                component: HomePage
            }
        ]),
        AutoCompleteModule
    ],
    exports: [
    ],
    declarations: [HomePage]
})
export class HomePageModule {}
