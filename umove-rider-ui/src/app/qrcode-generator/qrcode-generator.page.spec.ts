import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeGeneratorPage } from './qrcode-generator.page';

describe('QrcodeGeneratorPage', () => {
  let component: QrcodeGeneratorPage;
  let fixture: ComponentFixture<QrcodeGeneratorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrcodeGeneratorPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeGeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
