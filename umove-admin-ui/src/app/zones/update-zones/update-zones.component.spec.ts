import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateZonesComponent } from './update-zones.component';

describe('UpdateZonesComponent', () => {
  let component: UpdateZonesComponent;
  let fixture: ComponentFixture<UpdateZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
