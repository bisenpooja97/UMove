import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleTypeComponent } from './add-vehicle-type.component';

describe('AddVehicleTypeComponent', () => {
  let component: AddVehicleTypeComponent;
  let fixture: ComponentFixture<AddVehicleTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
