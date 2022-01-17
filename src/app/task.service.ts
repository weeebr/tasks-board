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

  private _dragEvent: BehaviorSubject <any> = new BehaviorSubject(false);
  dragEvent$ = this._dragEvent.asObservable();
  draggedTask: any;

  constructor() {
    this._tasks.next(this.getTasks());
   }

  setIsDragOver(flag) {
    this._isDragOver.next(flag);
  }

  setDragEvent(event) {
    this._dragEvent.next(event);
  }

  setDraggedTask(task) {
    this.draggedTask = task;
    console.log(task, [...this._tasks.value, task]);
    this.setTasks([...this._tasks.value, task]);
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
    this.setTasks(this._tasks.value.filter(t => !isEqual(t, task)));
  }
}
