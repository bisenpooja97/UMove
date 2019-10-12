import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchZoneComponent } from './search-zone.component';

describe('SearchZoneComponent', () => {
  let component: SearchZoneComponent;
  let fixture: ComponentFixture<SearchZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
