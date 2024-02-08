import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,MatIconModule,FormsModule,MatInputModule,MatListModule,MatCardModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  value = 'New Todo';
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
}
