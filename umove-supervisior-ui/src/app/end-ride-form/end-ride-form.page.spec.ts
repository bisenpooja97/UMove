import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndRideFormPage } from './end-ride-form.page';

describe('EndRideFormPage', () => {
  let component: EndRideFormPage;
  let fixture: ComponentFixture<EndRideFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndRideFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndRideFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
