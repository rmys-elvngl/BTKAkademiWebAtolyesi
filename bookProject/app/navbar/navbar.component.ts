import { Component, Input, Output } from '@angular/core';
import { BooksData } from '../book.consts';
import { MatButtonModule } from '@angular/material/button';
import { EventEmitter } from '@angular/core';
import { BookModel } from '../home-page/home-page.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // categories: string[] = ["History","Biography","Fantastic","Horror","Comedy"]; 
  //booksData = BooksData;
  @Input() categories: string[] = [];
  @Output() categoryName = new EventEmitter<string>();
  @Output() resetBooks = new EventEmitter<string>();
  @Output() allDeleteBooks = new EventEmitter<string>();

  filterBooks(event: string) {
    this.categoryName.emit(event);
  }
  sifirla() {
    this.resetBooks.emit();
  }
  allDelete(){
    this.allDeleteBooks.emit();
  }
}