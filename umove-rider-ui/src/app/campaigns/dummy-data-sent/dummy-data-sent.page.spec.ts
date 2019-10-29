import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDataSentPage } from './dummy-data-sent.page';

describe('DummyDataSentPage', () => {
  let component: DummyDataSentPage;
  let fixture: ComponentFixture<DummyDataSentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyDataSentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyDataSentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
