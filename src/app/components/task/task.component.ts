import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  dragIsOver: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }



  onDrag(event: DragEvent) {
    event.dataTransfer.setData("text", event.toString());
  }


}
