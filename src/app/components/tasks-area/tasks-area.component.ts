import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TaskAreaService } from '../../task-area.service';
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
  @Input() isHovered: any;


  currentIsDraggedOver: boolean;
  isDragOver: boolean;

  constructor(private taskService: TaskService, private taskAreaService: TaskAreaService) { }

  ngOnInit(): void {
    this.taskService.isDragOver$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(flag => {
      this.isDragOver = flag;
    });

    this.taskAreaService.unhoverAll$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(idx => {
      this.isHovered = false;
    });
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.currentIsDraggedOver = true;
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
    const areaIdx = Number.parseInt(target.getAttribute('data-area-idx'));
    console.log(data, colIdx, areaIdx);
    this.taskService.setDraggedTask({...task, colIdx, areaIdx});
    this.currentIsDraggedOver = false;
    this.taskService.setIsDragOver(true);
  }

  ngOnDestroy(): void {
    this.unsubscribeCollector.next();
    this.unsubscribeCollector.complete();
  }
}
