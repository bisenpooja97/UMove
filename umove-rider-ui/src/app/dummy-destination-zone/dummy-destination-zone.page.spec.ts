import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDestinationZonePage } from './dummy-destination-zone.page';

describe('DummyDestinationZonePage', () => {
  let component: DummyDestinationZonePage;
  let fixture: ComponentFixture<DummyDestinationZonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyDestinationZonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyDestinationZonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
