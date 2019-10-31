import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelComponent } from './fuel.component';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule,
  MatSnackBarModule, MatToolbarModule, MatSelectModule, MatOptionModule } from '@angular/material';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FuelCardComponent } from './fuel-card/fuel-card.component';
import { UpdateZonesComponent } from '../zones/update-zones/update-zones.component';
import { UpdateFuelComponent } from './update-fuel/update-fuel.component';
import { FuelDetailsComponent } from './fuel-details/fuel-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AvatarModule } from 'ngx-avatar';

fdescribe('FuelComponent', () => {
  let component: FuelComponent;
  let fixture: ComponentFixture<FuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelComponent ,
     FuelCardComponent,
     UpdateFuelComponent,
      FuelDetailsComponent
    ],
      imports: [MatInputModule,
      MatFormFieldModule,
      FormsModule,
      ReactiveFormsModule,
      NgxPaginationModule,
      Ng2SearchPipeModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatIconModule,
      FlexLayoutModule,
      MatCardModule,
      HttpClientTestingModule,
      MatDialogModule,
      MatSnackBarModule,
      MatToolbarModule,
      RouterTestingModule,
      MatSelectModule,
      MatOptionModule,
      AvatarModule
    ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(FuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
