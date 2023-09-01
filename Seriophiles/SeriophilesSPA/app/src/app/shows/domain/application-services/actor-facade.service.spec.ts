import { TestBed } from '@angular/core/testing';

import { ActorFacadeService } from './actor-facade.service';

describe('ActorFacadeService', () => {
  let service: ActorFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
