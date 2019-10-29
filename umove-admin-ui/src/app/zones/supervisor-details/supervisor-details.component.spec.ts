import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorDetailsComponent } from './supervisor-details.component';
import { MatCardModule, MatIconModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('SupervisorDetailsComponent', () => {
  let component: SupervisorDetailsComponent;
  let fixture: ComponentFixture<SupervisorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorDetailsComponent ],
      imports: [
        MatCardModule,
        RouterTestingModule,
        MatIconModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
