import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSupervisorComponent } from './update-supervisor.component';

describe('UpdateSupervisorComponent', () => {
  let component: UpdateSupervisorComponent;
  let fixture: ComponentFixture<UpdateSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
