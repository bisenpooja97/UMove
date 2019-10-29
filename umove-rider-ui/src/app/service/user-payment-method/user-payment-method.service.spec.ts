import { TestBed } from '@angular/core/testing';

import { UserPaymentMethodService } from './user-payment-method.service';

describe('UserPaymentMethodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPaymentMethodService = TestBed.get(UserPaymentMethodService);
    expect(service).toBeTruthy();
  });
});
