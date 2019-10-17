import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDetailsComponent } from './zone-details.component';
import { MatCardModule, MatIconModule, MatSnackBarModule, MatDialogModule, MatFormFieldModule, MatInputModule,
   MatSelectModule, MatOptionModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SupervisorDetailsComponent } from '../supervisor-details/supervisor-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ZoneDetailsComponent', () => {
  let component: ZoneDetailsComponent;
  let fixture: ComponentFixture<ZoneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneDetailsComponent, SupervisorDetailsComponent ],
      imports: [
        MatCardModule,
        RouterTestingModule,
        MatIconModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatOptionModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
