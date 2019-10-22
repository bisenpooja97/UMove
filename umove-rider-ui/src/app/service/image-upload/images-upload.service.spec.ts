import { TestBed } from '@angular/core/testing';

import { ImagesUploadService } from './images-upload.service';

describe('ImagesUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesUploadService = TestBed.get(ImagesUploadService);
    expect(service).toBeTruthy();
  });
});
