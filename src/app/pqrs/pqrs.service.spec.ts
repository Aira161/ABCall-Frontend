/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PqrsService } from './pqrs.service';

describe('Service: Pqrs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PqrsService]
    });
  });

  it('should ...', inject([PqrsService], (service: PqrsService) => {
    expect(service).toBeTruthy();
  }));
});
