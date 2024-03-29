import { Component, Input, OnInit } from '@angular/core';

import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  @Input() areaIdx: any;
  @Input() colIdx: any;
  isDragOver = false;
  isHovered = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onDrag(event: DragEvent) {
    event.dataTransfer.setData("task-info", this.getTaskInfo());
  }

  onMouseLeave(event) {
    this.isHovered = false;
  }

  onMouseEnter(event) {
    this.isHovered = true;
  }

  deleteTask(event, task) {
    this.taskService.deleteTask(event, task);
  }

  onDrop(event: DragEvent) {
    event.stopPropagation();
    const data = event.dataTransfer.getData("task-info");
    const task = JSON.parse(data);
    const target = event.target as HTMLElement;
    const colIdx = Number.parseInt(target.getAttribute('data-col-idx'));
    const areaIdx = Number.parseInt(target.getAttribute('data-area-idx'));
    this.taskService.setDraggedTask({...task, colIdx, areaIdx});
  }

  getTaskInfo() {
    return JSON.stringify(this.task);
  }
}
