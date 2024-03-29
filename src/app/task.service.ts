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

  constructor() {
    this._tasks.next(
      JSON.parse(localStorage.getItem('tasks')) || []
    );
   }

  setDraggedTask(task) {
    const { colIdx, areaIdx } = task;

    if (Number.isInteger(colIdx) && Number.isInteger(areaIdx)) {
      this.editTask(task, {colIdx, areaIdx});
      this.setTasks(this._tasks.value);
    }
  }

  setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this._tasks.next(tasks);
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

  deleteTask(event, task) {
    event.stopPropagation();
    const { colIdx, areaIdx, title } = task;
    
    this.setTasks(this._tasks.value.filter(
      (t) => t.colIdx !== colIdx && t.areaIdx !== areaIdx && t.title !== title)
    );
  }
}
