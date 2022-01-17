import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tasks } from "../constants/data-mockup";
import { isEqual } from "lodash";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  areaIdx: number;
  colIdx: number;
  title:  string;
  description: string;
  tasks: [];

  private _tasks: BehaviorSubject <any> = new BehaviorSubject([]);
  tasks$ = this._tasks.asObservable();

  private _isDragOver: BehaviorSubject <any> = new BehaviorSubject(false);
  isDragOver$ = this._isDragOver.asObservable();

  constructor() {
    this._tasks.next(this.getTasks());
   }

  setIsDragOver(flag) {
    this._isDragOver.next(flag);
  }

  setDraggedTask(task) {
    if (task.colIdx && task.areaIdx) {
      this.deleteTask(task);
      this.setTasks([...this._tasks.value, task]);
    }
  }

  getTasks() {
    return JSON.parse(sessionStorage.getItem('tasks')) || [];
  }

  setTasks(tasks) {
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
    this._tasks.next(tasks);
  }

  addTask(task) {
    this.setTasks([...this._tasks.value, task]);
  }

  editTask(task, newProps) {
    // this.tasks = this.tasks.fil
  }

  deleteTask(task) {
    const tasks = Array.from(this._tasks.value);
    const taskIdx = tasks.findIndex((t: any) => t.colIdx === task.colIdx && t.areaIdx === task.areaIdx && t.title === task.title);
    tasks.splice(taskIdx, 1);
    console.log(this._tasks.value, tasks);
    if (tasks.length > 0) {
      this.setTasks(tasks);
    }
    this.setTasks([]);
  }
}
