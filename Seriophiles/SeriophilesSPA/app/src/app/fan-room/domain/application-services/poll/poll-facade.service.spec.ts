import { TestBed } from '@angular/core/testing';

import { PollFacadeService } from './poll-facade.service';

describe('PollFacadeService', () => {
  let service: PollFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PollFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
