import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TaskService } from '../../task.service';

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


  currentIsDraggedOver: boolean;
  isDragOver: boolean;
  isHovered = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.isDragOver$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(flag => {
      this.isDragOver = flag;
    });

    this.draggedOverColIdx$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(idx => {
      this.currentIsDraggedOver = idx === this.colIdx && this.areaIdx === 0;
    });
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.currentIsDraggedOver = true;
    this.taskService.setIsDragOver(true);
  }

  onDragLeave(event) {
    this.currentIsDraggedOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer.getData("task-info");
    const task = JSON.parse(data);
    const target = event.target as HTMLElement;
    const colIdx = Number.parseInt(target.getAttribute('data-col-idx'));
    const areaIdx = Number.parseInt(target.getAttribute('data-col-idx'));
    this.taskService.setDraggedTask({...task, colIdx, areaIdx});
    this.currentIsDraggedOver = false;

    this.taskService.setIsDragOver(false);
  }

  addTask(task: any) {
    const title = window.prompt('task name?')
    this.taskService.addTask({ ...task, title });
  }

  onMouseOver(event) {
    this.isHovered = true;
  }

  onMouseLeave(event) {
    this.isHovered = false;
  }

  ngOnDestroy(): void {
    this.unsubscribeCollector.next();
    this.unsubscribeCollector.complete();
  }
}
