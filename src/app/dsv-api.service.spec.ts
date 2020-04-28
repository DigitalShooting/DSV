import { TestBed } from '@angular/core/testing';

import { DsvApiService } from './dsv-api.service';

describe('DsvApiService', () => {
  let service: DsvApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsvApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
