import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RatpService } from './ratp.service';

describe('RatpService', () => {
  let service: RatpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RatpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
