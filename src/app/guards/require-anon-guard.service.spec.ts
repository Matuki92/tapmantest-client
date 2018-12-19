import { TestBed } from '@angular/core/testing';

import { RequireAnonGuardService } from './require-anon-guard.service';

describe('RequireAnonGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequireAnonGuardService = TestBed.get(RequireAnonGuardService);
    expect(service).toBeTruthy();
  });
});
