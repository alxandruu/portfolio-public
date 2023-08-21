import { TestBed } from '@angular/core/testing';

import { CvManagerService } from './cv-manager.service';

describe('CvManagerService', () => {
  let service: CvManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
