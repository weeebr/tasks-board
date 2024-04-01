import { Component, Input, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  @Input() rowIdx: any;
  @Input() colIdx: any;
  isHovered = false;
  mobile: boolean;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    if (window.innerWidth < 880) { 
      this.mobile = true;
    };
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
    const rowIdx = Number.parseInt(target.getAttribute('data-row-idx'));
    this.taskService.setDraggedTask({...task, colIdx, rowIdx});
  }

  getTaskInfo() {
    return JSON.stringify(this.task);
  }
}
