import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKycPage } from './update-kyc.page';

describe('UpdateKycPage', () => {
  let component: UpdateKycPage;
  let fixture: ComponentFixture<UpdateKycPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateKycPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKycPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
