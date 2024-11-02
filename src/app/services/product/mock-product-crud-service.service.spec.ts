import { TestBed } from '@angular/core/testing';

import { MockProductCrudServiceService } from './mock-product-crud-service.service';

describe('MockProductCrudServiceService', () => {
  let service: MockProductCrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockProductCrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
