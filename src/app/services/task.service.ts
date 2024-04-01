import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  rowIdx: number;
  colIdx: number;
  title:  string;
  description: string;
  tasks: [];

  private _tasks: BehaviorSubject <any> = new BehaviorSubject([]);
  tasks$ = this._tasks.asObservable();

  get lastIdx() {
    return this._tasks.value.length;
  }

  constructor() {
    this._tasks.next(
      JSON.parse(localStorage.getItem('tasks')) || []
    );
   }

  onDrop(event, pos) {
    const data = event.dataTransfer.getData("task-info");
    const task = JSON.parse(data);
    const target = event.target as HTMLElement;

    this.setDraggedTask({...task, ...pos});
  }

  setDraggedTask(task) {
    const { colIdx, rowIdx } = task;
    console.log('<fff>', `task`);

    if (Number.isInteger(colIdx) && Number.isInteger(rowIdx)) {
      this.editTask(task, {colIdx, rowIdx});
      this.setTasks(this._tasks.value);
    }
  }

  setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this._tasks.next(tasks);
  }

  addTask(task) {
    if (task.title) {
      this.setTasks([...this._tasks.value, {...task, id: this.lastIdx}]);
    }
  }

  editTask(task, newProps) {
    this._tasks.next(
      this._tasks.value.map((t: any) => t.id === task.id ? ({...task, ...newProps}) : t)
    );
  }

  deleteTask(event, task) {
    event.stopPropagation();
    const { colIdx, rowIdx, title } = task;
    
    this.setTasks(this._tasks.value.filter(
      (t) => t.colIdx !== colIdx && t.rowIdx !== rowIdx && t.title !== title)
    );
  }
}
