import { TestBed, inject } from '@angular/core/testing';

import { TimeAndDateService } from './time-and-date.service';

describe('TimeAndDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeAndDateService]
    });
  });

  it('should be created', inject([TimeAndDateService], (service: TimeAndDateService) => {
    expect(service).toBeTruthy();
  }));
});
