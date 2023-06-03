import { TestBed } from '@angular/core/testing';

import { LoginActivate } from './login-activate.guard';

describe('LoginActivateGuard', () => {
  let guard: LoginActivate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginActivate);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
