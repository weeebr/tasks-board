import { TestBed } from '@angular/core/testing';

import { DragTaskService } from './drag-task.service';

describe('DragTaskService', () => {
  let service: DragTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
