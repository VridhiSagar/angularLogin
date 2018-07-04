import { TestBed, inject } from '@angular/core/testing';

import { RegisterSubmitService } from './register-submit.service';

describe('RegisterSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterSubmitService]
    });
  });

  it('should be created', inject([RegisterSubmitService], (service: RegisterSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
