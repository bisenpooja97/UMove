import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDisplayComponent } from './count-display.component';

describe('CountDisplayComponent', () => {
  let component: CountDisplayComponent;
  let fixture: ComponentFixture<CountDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
