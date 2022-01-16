import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragTaskService {
  private _isDragOver: BehaviorSubject <any> = new BehaviorSubject(false);
  isDragOver$ = this._isDragOver.asObservable();

  constructor() { }

  setIsDragOver(flag) {
    this._isDragOver.next(flag);
  }
}
