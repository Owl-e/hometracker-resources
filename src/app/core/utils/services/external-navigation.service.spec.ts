import { TestBed } from '@angular/core/testing';

import { ExternalNavigationService } from './external-navigation.service';

describe('ExternalNavigationService', () => {
  let service: ExternalNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
