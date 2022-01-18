import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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

  private _draggedOverColIdx: BehaviorSubject <number> = new BehaviorSubject(null);
  draggedOverColIdx$ = this._draggedOverColIdx.asObservable();
  tasks: any;
  boardData: any;
  isDragOver: boolean;

  constructor(private taskService: TaskService, private boardDataService: BoardDataService) { }

  ngOnInit(): void {
    this.taskService.tasks$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(tasks => {
      this.tasks = tasks;
    });

    this.taskService.isDragOver$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(flag => {
      this.isDragOver = flag;
    });

    this.boardData = this.boardDataService.getBoardData();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const idx = target.getAttribute('data-col-idx');
    this._draggedOverColIdx.next(Number.parseInt(idx));
  }

  onDragLeave() {
    // this.draggedOverColIdx = null;
    console.log('leave');
  }

  getAreaTasks({colIdx, areaIdx}) {
    if (!this.tasks || this.tasks.length === 0) return [];

    return this.tasks.filter(t => t.colIdx === colIdx && t.areaIdx === areaIdx);
  }

  ngOnDestroy(): void {
    this.unsubscribeCollector.next();
    this.unsubscribeCollector.complete();
  }
}




