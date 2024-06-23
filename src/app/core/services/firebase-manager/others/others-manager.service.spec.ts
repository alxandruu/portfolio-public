import { TestBed } from '@angular/core/testing';

import { OthersManagerService } from './others-manager.service';

describe('OthersManagerService', () => {
  let service: OthersManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OthersManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
