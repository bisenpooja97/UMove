import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsVehicleTypeComponent } from './bookings-vehicle-type.component';

describe('BookingsVehicleTypeComponent', () => {
  let component: BookingsVehicleTypeComponent;
  let fixture: ComponentFixture<BookingsVehicleTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsVehicleTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsVehicleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
