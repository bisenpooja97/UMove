import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupervisorComponent } from './add-supervisor.component';
import { MatIconModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatDialogModule,
         MatSnackBarModule, MatDialogRef, MatAutocompleteModule, MatSelectModule, MatOptionModule,
          MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AddSupervisorComponent', () => {
  let component: AddSupervisorComponent;
  let fixture: ComponentFixture<AddSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupervisorComponent ],
      imports: [
        MatIconModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatDialogModule,
        HttpClientModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatOptionModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
