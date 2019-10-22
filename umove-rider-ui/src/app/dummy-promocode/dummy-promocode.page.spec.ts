import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPromocodePage } from './dummy-promocode.page';

describe('DummyPromocodePage', () => {
  let component: DummyPromocodePage;
  let fixture: ComponentFixture<DummyPromocodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyPromocodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPromocodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
