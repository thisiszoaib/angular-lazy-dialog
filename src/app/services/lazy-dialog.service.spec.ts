import { TestBed } from '@angular/core/testing';

import { LazyDialogService } from './lazy-dialog.service';

describe('LazyDialogService', () => {
  let service: LazyDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
