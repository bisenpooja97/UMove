import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsDetailsComponent } from './campaigns-details.component';

describe('CampaignsDetailsComponent', () => {
  let component: CampaignsDetailsComponent;
  let fixture: ComponentFixture<CampaignsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
