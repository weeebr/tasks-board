import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragService {
  private _data: BehaviorSubject<any> = new BehaviorSubject({
    startPos: {},
    currentPos: {}
  });
  data$ = this._data.asObservable();

  constructor() {}

  setData = (key, next) => {
    const prev = this._data.value[key];

    // const isObjectEqual = 
    //   Object.keys(prev).length === Object.keys(next).length &&
    //   Object.keys(prev).every(key => prev[key] === next[key]);

    // const isEqual = typeof prev === 'object' 
    //   ? isObjectEqual
    //   : prev === next;

    // if (!isEqual) {
      this._data.next({...this._data, [key]: [next]});
    // }
  }
 
  setStartPos = (pos = {}) => {
    this.setData('startPos', {...pos});
  }

  setDragPos = (pos = {}) => {
    this.setData('currentPos', {...pos});
  }
}
