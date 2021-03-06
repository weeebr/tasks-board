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

  onDrop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer.getData("task-info");
    const task = JSON.parse(data);
    const target = event.target as HTMLElement;
    const colIdx = Number.parseInt(target.getAttribute('data-col-idx'));
    const areaIdx = Number.parseInt(target.getAttribute('data-area-idx'));
    console.log(data, colIdx, areaIdx);
    this.taskService.setDraggedTask({...task, colIdx, areaIdx});
    this.taskService.setIsDragOver(true);
  }

  getTaskInfo() {
    return JSON.stringify(this.task);
  }
}
