import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideDetailPage } from './ride-detail.page';

describe('RideDetailPage', () => {
  let component: RideDetailPage;
  let fixture: ComponentFixture<RideDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
