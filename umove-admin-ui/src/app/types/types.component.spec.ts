import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesComponent } from './types.component';
import { TypeDeatilsComponent } from './type-deatils/type-deatils.component';
import { UpdateTypesComponent } from './update-types/update-types.component';
import { AddVehicleTypeComponent } from './add-vehicle-type/add-vehicle-type.component';
import { VehicleTypeCardComponent } from './vehicle-type-card/vehicle-type-card.component';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule,
   MatSnackBarModule, MatToolbarModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AvatarModule } from 'ngx-avatar';
import { LazyLoadImageModule } from 'ng-lazyload-image';

describe('TypesComponent', () => {
  let component: TypesComponent;
  let fixture: ComponentFixture<TypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesComponent ,
    TypeDeatilsComponent,
    UpdateTypesComponent,
    AddVehicleTypeComponent,
    VehicleTypeCardComponent
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
      AvatarModule,
      LazyLoadImageModule
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
