import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesComponent } from './zones.component';
import { ZoneCardComponent } from './zone-card/zone-card.component';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule,
   MatSnackBarModule, MatToolbarModule, MatSelectModule, MatOptionModule } from '@angular/material';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ZoneDetailsComponent } from './zone-details/zone-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdateZonesComponent } from './update-zones/update-zones.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SupervisorDetailsComponent } from './supervisor-details/supervisor-details.component';

fdescribe('ZonesComponent', () => {
  let component: ZonesComponent;
  let fixture: ComponentFixture<ZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonesComponent ,
      ZoneCardComponent,
      UpdateZonesComponent,
      ZoneDetailsComponent,
      SupervisorDetailsComponent
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
      MatOptionModule
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
