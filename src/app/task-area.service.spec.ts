import { TestBed } from '@angular/core/testing';

import { TaskAreaService } from './task-area.service';

describe('TaskAreaService', () => {
  let service: TaskAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
