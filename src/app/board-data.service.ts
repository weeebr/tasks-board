import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { boardData } from "../constants/data-mockup";

@Injectable({
  providedIn: 'root'
})
export class BoardDataService {
  boardData: [];

  constructor() {
    this.boardData = boardData;
   }

  getBoardData() {
    return boardData //JSON.parse(sessionStorage.getItem('board-data'));
  }

  setBoardData(data) {
    sessionStorage.setItem('board-data', JSON.stringify(data));
  }

  editBoardData(data, newProps) {
    //
  }
}
