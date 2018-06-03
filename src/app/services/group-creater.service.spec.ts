import { TestBed, inject } from '@angular/core/testing';

import { GroupCreaterService } from './group-creater.service';

describe('GroupCreaterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupCreaterService]
    });
  });

  it('should be created', inject([GroupCreaterService], (service: GroupCreaterService) => {
    expect(service).toBeTruthy();
  }));
});
