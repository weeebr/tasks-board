import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'life-board';
  mobile: boolean;

  ngOnInit(): void {
    console.log('<fff>', `window.innerWidth: `, window.innerWidth);
    if (window.innerWidth < 880) { 
      this.mobile = true;
    }; 
  }
}
