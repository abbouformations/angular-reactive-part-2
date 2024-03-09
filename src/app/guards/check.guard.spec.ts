import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { checkGuard } from './check.guard';

describe('checkGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
