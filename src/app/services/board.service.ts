import { Injectable } from '@angular/core';
import { boardData } from "../../constants/data-mockup";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  boardData: [];

  constructor() {
    this.boardData = boardData;
  }

  getBoardData() {
    return boardData;
  }

  setBoardData(data) {
    sessionStorage.setItem('board-data', JSON.stringify(data));
  }

  editBoardData(data, newProps) {
    //
  }

  getAreaIndexes = el => ({
    colIdx: Number.parseInt(el.getAttribute('data-col-idx')),
    rowIdx: Number.parseInt(el.getAttribute('data-row-idx'))
  });
}
