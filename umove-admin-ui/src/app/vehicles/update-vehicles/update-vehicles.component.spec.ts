import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehiclesComponent } from './update-vehicles.component';

describe('UpdateVehiclesComponent', () => {
  let component: UpdateVehiclesComponent;
  let fixture: ComponentFixture<UpdateVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
