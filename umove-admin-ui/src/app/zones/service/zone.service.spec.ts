import { TestBed } from '@angular/core/testing';

import { ZoneService } from './zone.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ZoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: ZoneService = TestBed.get(ZoneService);
    expect(service).toBeTruthy();
  });
});
