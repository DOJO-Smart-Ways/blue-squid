import { TestBed } from '@angular/core/testing';

import { BlueSquidComponentsService } from './blue-squid-components.service';

describe('BlueSquidComponentsService', () => {
  let service: BlueSquidComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueSquidComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
