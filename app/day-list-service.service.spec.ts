import { TestBed } from '@angular/core/testing';

import { DayListServiceService } from './day-list-service.service';

describe('DayListServiceService', () => {
  let service: DayListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
