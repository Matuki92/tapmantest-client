import { TestBed } from '@angular/core/testing';

import { InitAuthGuardService } from './init-auth-guard.service';

describe('InitAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitAuthGuardService = TestBed.get(InitAuthGuardService);
    expect(service).toBeTruthy();
  });
});
