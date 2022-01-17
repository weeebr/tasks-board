import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tasks } from "../constants/data-mockup";
import { isEqual } from "lodash";

@Injectable({
  providedIn: 'root'
})
export class TaskAreaService {
  areaIdx: number;
  colIdx: number;
  title:  string;
  description: string;
  tasks: [];

  private _unhoverAll: BehaviorSubject <any> = new BehaviorSubject([]);
  unhoverAll$ = this._unhoverAll.asObservable();

  constructor() {}

  unhoverAll() {
    this._unhoverAll.next(true);
  }
}
