import { BehaviorSubject, Subject } from 'rxjs';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { BoardService } from "../../services/board.service";
import { DragService } from '../../services/drag.service';
import { TaskService } from '../../services/task.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-board-mobile',
  templateUrl: './board-mobile.component.html',
  styleUrls: ['./board-mobile.component.scss']
})
export class BoardMobileComponent implements OnInit, OnDestroy {
  @ViewChild('dropZone', { static: true }) dropZone: ElementRef;
  @Input() isHovered: any;

  private unsubscribeCollector: Subject<any> = new Subject();

  tasks: any;
  data: any;
  currentDragPos: any;
  startDragPos: any;
  isDrag: boolean;
  isDragEntered: boolean;

  constructor(
    private taskService: TaskService,
    private dragService: DragService,
    private boardService: BoardService
  ) {}

  ngOnInit(): void {
    this.taskService.tasks$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(tasks => {
      this.tasks = tasks;
    });

    this.dragService.data$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(data => {
      this.currentDragPos = data.currentPos;
      this.startDragPos = data.startPos;
    });

    this.data = this.boardService.getBoardData();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const pos = this.boardService.getAreaIndexes(event.target);
    console.log('<fff>', `onDrop`);
    // Check if the dropped element is a task or not (based on its data attribute)$
    console.log('<fff>', `event.dataTransfer.types: `, event.dataTransfer.types);
    if (event.dataTransfer.types[0] !== 'task') {
      return;
    }
    // If it's a task, get its data and set the rowIdx and colIdx to be that of the target area
    const taskData = JSON.parse(event.dataTransfer.getData('task'));
    (event.target as HTMLElement).classList.remove('is-dragentered');

    this.taskService.onDrop(event, { ...pos, rowIdx: taskData.rowIdx, colIdx: taskData.colIdx });
    this.dragService.setDragPos(pos);
    this.isDrag = false;
  }

  onDragLeave(event: DragEvent) {
    event.stopPropagation();
    console.log('<fff>', `onDragLeave`);
  }

  onDragStart(event: DragEvent) {
    event.stopPropagation();
    const pos = this.boardService.getAreaIndexes(event.target);
    this.dragService.setStartPos(pos);
    this.isDrag = true;
  }

  onDragEnter(event: DragEvent, where = '') {
    event.stopPropagation();
    console.log('<fff>', `onDragEnter`, where);
    // when a dragged element or text selection enters a valid drop target
    this.isDragEntered = true;
    if (where === 'area') {
      (event.target as HTMLElement).classList.add('is-dragentered');
    } else {
      event.preventDefault();
    }
  }

  addTask({rowIdx, colIdx}) {
    const title = window.prompt('task name?');
    this.taskService.addTask({rowIdx, colIdx, title});
  }

  getAreaTasks({colIdx, rowIdx}) {
    if (!this.tasks || this.tasks.length === 0) return [];

    return this.tasks.filter(t => t.colIdx === colIdx && t.rowIdx === rowIdx);
  }

  ngOnDestroy(): void {
    this.unsubscribeCollector.next();
    this.unsubscribeCollector.complete();
  }
}




