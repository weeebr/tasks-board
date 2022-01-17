import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  isDragOver = false;
  isHovered = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onDrag(event: DragEvent) {
    this.taskService.setIsDragOver(false);
    event.dataTransfer.setData("task-info", this.getTaskInfo());
  }

  onMouseLeave(event) {
    this.isHovered = false;
  }

  onMouseEnter(event) {
    this.isHovered = true;
  }

  deleteTask(task) {
    this.taskService.deleteTask(task);
  }

  getTaskInfo() {
    return JSON.stringify(this.task);
  }
}
