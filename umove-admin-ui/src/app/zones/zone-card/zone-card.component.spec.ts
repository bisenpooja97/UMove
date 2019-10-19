import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneCardComponent } from './zone-card.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatPaginatorModule,
  MatSelectModule, MatOptionModule, MatDialogModule, MatToolbarModule, MatAutocompleteModule } from '@angular/material';
import { ZonesRoutingModule } from '../zones-routing.module';
import { ZonesComponent } from '../zones.component';
import { ZoneDetailsComponent } from '../zone-details/zone-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SupervisorDetailsComponent } from '../supervisor-details/supervisor-details.component';

describe('ZoneCardComponent', () => {
  let component: ZoneCardComponent;
  let fixture: ComponentFixture<ZoneCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        ZonesRoutingModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule,
        NgxPaginationModule,
        Ng2SearchPipeModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatOptionModule,
        MatDialogModule,
        MatToolbarModule,
        MatAutocompleteModule,
        RouterTestingModule
      ],
      declarations: [ ZoneCardComponent, ZonesComponent, ZoneDetailsComponent,
      SupervisorDetailsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
