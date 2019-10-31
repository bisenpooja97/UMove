import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeListPage } from './bike-list.page';

describe('BikeListPage', () => {
  let component: BikeListPage;
  let fixture: ComponentFixture<BikeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BikeListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
