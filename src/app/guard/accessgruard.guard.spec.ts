import { TestBed } from '@angular/core/testing';

import { AccessgruardGuard } from './accessgruard.guard';

describe('AccessgruardGuard', () => {
  let guard: AccessgruardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessgruardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
