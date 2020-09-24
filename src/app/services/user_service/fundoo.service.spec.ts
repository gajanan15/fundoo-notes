import { TestBed } from '@angular/core/testing';

import { FundooService } from './fundoo.service';

describe('FundooService', () => {
  let service: FundooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
