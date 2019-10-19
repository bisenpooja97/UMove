import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZoneComponent } from './add-zone.component';
import { MatIconModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatDialogRef, MatDialogModule,
   MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddZoneComponent', () => {
  let component: AddZoneComponent;
  let fixture: ComponentFixture<AddZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddZoneComponent ],
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
        MatSnackBarModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
