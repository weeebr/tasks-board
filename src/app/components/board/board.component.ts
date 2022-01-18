import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TaskAreaService } from '../../task-area.service';
import { TaskService } from '../../task.service';
import { BoardDataService } from "./../../board-data.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  @ViewChild('dropZone', { static: true }) dropZone: ElementRef;

  private unsubscribeCollector: Subject<any> = new Subject();

  private _draggedOverColIdx: BehaviorSubject <number> = new BehaviorSubject(null);
  draggedOverColIdx$ = this._draggedOverColIdx.asObservable();
  tasks: any;
  boardData: any;
  isDragOver: boolean;
  currentDragPos: number[];
  currentMousePos: number[];

  constructor(private taskService: TaskService, private taskAreaService: TaskAreaService, private boardDataService: BoardDataService) { }

  ngOnInit(): void {
    this.taskService.tasks$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(tasks => {
      this.tasks = tasks;
    });

    this.taskService.isDragOver$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(flag => {
      this.isDragOver = flag;
    });

    this.boardData = this.boardDataService.getBoardData();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer.getData("task-info");
    const task = JSON.parse(data);
    const target = event.target as HTMLElement;
    const [ colIdx, areaIdx ] = this.getIndexes(target);

    console.log(data, colIdx, areaIdx);
    this.taskService.setDraggedTask({...task, colIdx, areaIdx});
    this.taskService.setIsDragOver(true);
    this.currentDragPos = null;
  }

  getIndexes = el => ([
    Number.parseInt(el.getAttribute('data-col-idx')),
    Number.parseInt(el.getAttribute('data-area-idx'))
  ])

  onDragOver(event: DragEvent) {
    event.preventDefault();
    const target = event.target as HTMLElement;

    this.currentDragPos = this.getIndexes(target);
  }

  addTask(task: any) {
    const title = window.prompt('task name?')
    this.taskService.addTask({ ...task, title });
  }

  onMouseEnter(event) {
    const target = event.target as HTMLElement;

    this.taskAreaService.unhoverAll();
    this.currentMousePos = this.getIndexes(target);
  }

  onMouseLeave(event) {
    this.currentMousePos = null;
  }

  onDragLeave(event) {
    event.preventDefault();
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




