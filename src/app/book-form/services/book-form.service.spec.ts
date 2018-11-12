import { TestBed, inject } from '@angular/core/testing';

import { BookFormService } from './book-form.service';

describe('BookFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookFormService]
    });
  });

  it('should be created', inject([BookFormService], (service: BookFormService) => {
    expect(service).toBeTruthy();
  }));
});
