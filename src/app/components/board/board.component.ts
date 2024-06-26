import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { BoardService } from "../../services/board.service";
import { DragService } from "../../services/drag.service";
import { Subject } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  @ViewChild('dropZone', { static: true }) dropZone: ElementRef;
  @Input() isHovered: any;

  private unsubscribeCollector: Subject<any> = new Subject();

  tasks: any;
  data: any;
  currentDragPos: any;
  startDragPos: any;

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
    console.log('<fff>', `pos: `, pos);
    this.taskService.onDrop(event, pos);
    this.dragService.setDragPos(pos);
  }

  onDragStart(event: DragEvent) {
    const pos = this.boardService.getAreaIndexes(event.target);
    this.dragService.setStartPos(pos);
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




