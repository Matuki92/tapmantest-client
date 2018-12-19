import { TestBed } from '@angular/core/testing';

import { RequireUserGuardService } from './require-user-guard.service';

describe('RequireUserGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequireUserGuardService = TestBed.get(RequireUserGuardService);
    expect(service).toBeTruthy();
  });
});
