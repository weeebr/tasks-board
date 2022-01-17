import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tasks } from "../constants/data-mockup";

@Injectable({
  providedIn: 'root'
})
export class BoardDataService {
  boardData: [];

  constructor() {
    this.boardData = this.getBoardData();
   }

  getBoardData() {
    return JSON.parse(sessionStorage.getItem('board-data'));
  }

  setBoardData(data) {
    sessionStorage.setItem('board-data', JSON.stringify(data));
  }

  editBoardData(data, newProps) {
    //
  }
}
