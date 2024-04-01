import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardComponent } from './components/board/board.component';
import { BoardMobileComponent } from './components/board-mobile/board-mobile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskComponent } from './components/task/task.component';
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardMobileComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
