import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TodoListComponent,MatIconModule,CommonModule,FormsModule,MatPaginatorModule]
})

export class AppComponent {
  title = 'todo-list';
  tasks: string[] = ['Test1', 'Test2'];
  newTaskInput=""
  Add(){
  this.tasks.push(this.newTaskInput)
  this.newTaskInput =""
 }
//   Add(yeniGorev: string){
//     this.tasks.push(yeniGorev);
//     yeniGorev ="";
//   }

  Delete(task: string) {
    //this.tasks.splice(index,1)
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  editTask(task: string) {

    const newTask = prompt("Enter the new task name:", task);
    if (newTask !== null) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks[index] = newTask;
      }
    }
  }
}
//dialog'da eklenebilir edit kısmında 
// if(result){
//   this.tasks[index] = newTask;
// }