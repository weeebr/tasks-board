import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { TaskAreaService } from '../../task-area.service';
import { TaskService } from '../../task.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tasks-area',
  templateUrl: './tasks-area.component.html',
  styleUrls: ['./tasks-area.component.scss'],
})
export class TasksAreaComponent implements OnInit, OnDestroy {
  private unsubscribeCollector: Subject<any> = new Subject();

  @Input() area: any;
  @Input() areaIdx: number;
  @Input() colIdx: number;
  @Input() tasks: any;
  @Input() draggedOverColIdx$: any;
  @Input() isHovered: any;

  isDragOver: boolean;

  constructor(private taskService: TaskService, private taskAreaService: TaskAreaService) { }

  ngOnInit(): void {
    this.taskAreaService.unhoverAll$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(idx => {
      this.isHovered = false;
    });
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragLeave(event) {
    this.isHovered = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer.getData("task-info");
    const task = JSON.parse(data);
    const target = event.target as HTMLElement;
    const colIdx = Number.parseInt(target.getAttribute('data-col-idx'));
    const areaIdx = Number.parseInt(target.getAttribute('data-area-idx'));
    this.taskService.setDraggedTask({...task, colIdx, areaIdx});
    this.isHovered = false;
  }

  ngOnDestroy(): void {
    this.unsubscribeCollector.next();
    this.unsubscribeCollector.complete();
  }
}
