import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsZoneComponent } from './bookings-zone.component';

describe('BookingsZoneComponent', () => {
  let component: BookingsZoneComponent;
  let fixture: ComponentFixture<BookingsZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
