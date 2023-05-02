import { TestBed } from '@angular/core/testing';

import { TvShowFacadeService } from './tv-show-facade.service';

describe('TvShowFacadeService', () => {
  let service: TvShowFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
