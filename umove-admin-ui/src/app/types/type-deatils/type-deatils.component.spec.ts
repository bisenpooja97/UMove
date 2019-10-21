import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeatilsComponent } from './type-deatils.component';

describe('TypeDeatilsComponent', () => {
  let component: TypeDeatilsComponent;
  let fixture: ComponentFixture<TypeDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
