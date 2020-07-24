import { TestBed } from '@angular/core/testing';

import { EmpservicesService } from './empservices.service';

describe('EmpservicesService', () => {
  let service: EmpservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
