import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCampaignsListPage } from './show-campaigns-list.page';

describe('ShowCampaignsListPage', () => {
  let component: ShowCampaignsListPage;
  let fixture: ComponentFixture<ShowCampaignsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCampaignsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCampaignsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
