import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPaymentMethodPage } from './show-payment-method.page';

describe('ShowPaymentMethodPage', () => {
  let component: ShowPaymentMethodPage;
  let fixture: ComponentFixture<ShowPaymentMethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPaymentMethodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPaymentMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
