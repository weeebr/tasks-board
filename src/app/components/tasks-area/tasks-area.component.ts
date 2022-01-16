import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DragTaskService } from '../../drag-task.service';

@Component({
  selector: 'app-tasks-area',
  templateUrl: './tasks-area.component.html',
  styleUrls: ['./tasks-area.component.scss'],
})
export class TasksAreaComponent implements OnInit, OnDestroy {
  private unsubscribeCollector: Subject<any> = new Subject();

  @Input() title: any;
  @Input() tasks: any;
  isDragOver: boolean;

  constructor(private dragTaskService: DragTaskService) { }

  ngOnInit(): void {
    this.dragTaskService.isDragOver$.pipe(takeUntil(this.unsubscribeCollector)).subscribe(flag => {
      this.isDragOver = flag;
    });
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragTaskService.setIsDragOver(true);
  }


  onDrop(event: DragEvent) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    console.log('drop', data);
    this.dragTaskService.setIsDragOver(false);
  }

  ngOnDestroy(): void {
    this.unsubscribeCollector.next();
    this.unsubscribeCollector.complete();
  }
}
