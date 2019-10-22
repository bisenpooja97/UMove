import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFuelComponent } from './update-fuel.component';

describe('UpdateFuelComponent', () => {
  let component: UpdateFuelComponent;
  let fixture: ComponentFixture<UpdateFuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
