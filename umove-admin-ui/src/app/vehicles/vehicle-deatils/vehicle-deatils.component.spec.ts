import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDeatilsComponent } from './vehicle-deatils.component';

describe('VehicleDeatilsComponent', () => {
  let component: VehicleDeatilsComponent;
  let fixture: ComponentFixture<VehicleDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
