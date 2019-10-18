import { TestBed } from '@angular/core/testing';

import { RideSocketService } from './ride-socket.service';

describe('RideSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RideSocketService = TestBed.get(RideSocketService);
    expect(service).toBeTruthy();
  });
});
