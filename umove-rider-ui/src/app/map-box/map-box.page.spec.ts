import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBoxPage } from './map-box.page';

describe('MapBoxPage', () => {
  let component: MapBoxPage;
  let fixture: ComponentFixture<MapBoxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBoxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
