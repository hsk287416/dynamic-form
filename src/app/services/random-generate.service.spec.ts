import { TestBed, inject } from '@angular/core/testing';

import { RandomGenerateService } from './random-generate.service';

describe('RandomGenerateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomGenerateService]
    });
  });

  it('should be created', inject([RandomGenerateService], (service: RandomGenerateService) => {
    expect(service).toBeTruthy();
  }));
});
