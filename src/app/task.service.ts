import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

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

  get idx() {
    return this._tasks.value.length;
  }

  private _isDragOver: BehaviorSubject <any> = new BehaviorSubject(false);
  isDragOver$ = this._isDragOver.asObservable();

  constructor() {
    this._tasks.next(this.getTasks());
   }

  setIsDragOver(flag) {
    this._isDragOver.next(flag);
  }

  setDraggedTask(task) {
    const { colIdx, areaIdx } = task;

    if (Number.isInteger(colIdx) && Number.isInteger(areaIdx)) {
      this.editTask(task, {colIdx, areaIdx});
      this.setTasks(this._tasks.value);
    }
  }

  getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const uniqTasks = [...tasks.reduce((a,b) => {
      a.set(b.id, b);
      return a;
    }, new Map()).values()];

    this._tasks.next(uniqTasks);
  }

  addTask(task) {
    if (task.title) {
      this.setTasks([...this._tasks.value, {...task, id: this.idx}]);
    }
  }

  editTask(task, newProps) {
    this._tasks.next(
      this._tasks.value.map((t: any) => t.id === task.id ? ({...task, ...newProps}) : t)
    );
  }

  deleteTask(task) {
    const tasks = Array.from(this._tasks.value);
    const taskIdx = tasks.findIndex((t: any) => t.colIdx === task.colIdx && t.areaIdx === task.areaIdx && t.title === task.title);
    tasks.splice(taskIdx, 1);
    if (tasks.length > 0) {
      this.setTasks(tasks);
    } else {
      this.setTasks([]);
    }
  }
}
