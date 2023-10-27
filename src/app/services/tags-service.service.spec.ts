/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TagsServiceService } from './tags-service.service';

describe('Service: TagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagsServiceService]
    });
  });

  it('should ...', inject([TagsServiceService], (service: TagsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
