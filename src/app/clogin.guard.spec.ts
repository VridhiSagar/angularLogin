import { TestBed, async, inject } from '@angular/core/testing';

import { CloginGuard } from './clogin.guard';

describe('CloginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloginGuard]
    });
  });

  it('should ...', inject([CloginGuard], (guard: CloginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
