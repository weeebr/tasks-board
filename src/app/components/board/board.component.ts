import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TaskService } from '../../task.service';
import { BoardDataService } from "./../../board-data.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  private unsubscribeCollector: Subject<any> = new Subject();

  draggedOverColIdx: any;

  private _draggedOverColIdx: Subject <number> = new Subject();
  draggedOverColIdx$ = this._draggedOverColIdx.asObservable();
  tasks: any;
  boardData: any;

  constructor(private taskService: TaskService, private boardDataService: BoardDataService) { }

  ngOnInit(): void {
    this.taskService.tasks$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(tasks => {
      this.tasks = tasks;
    });

    this.boardData = this.boardDataService.getBoardData();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer.getData("task-info");
    const task = JSON.parse(data);
    // this.taskService.setDraggedTask(task);
    // this.currentIsDraggedOver = false;

    // this.taskService.setIsDragOver(false);
  }

  isDragOverCurrent(colIdx) {
    return this.draggedOverColIdx === colIdx;
  }


  onDragOver(event: DragEvent) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const idx = target.getAttribute('data-col-idx');
    this._draggedOverColIdx.next(Number.parseInt(idx));
  }

  onDragLeave() {
    // this.draggedOverColIdx = null;
  }

  getAreaTasks(colIdx, areaIdx) {
    return this.tasks && this.tasks.length > 0
    ? this.tasks.filter(t => t.colIdx === colIdx && t.areaIdx === areaIdx)
    : [];
  }

  ngOnDestroy(): void {
    this.unsubscribeCollector.next();
    this.unsubscribeCollector.complete();
  }
}




