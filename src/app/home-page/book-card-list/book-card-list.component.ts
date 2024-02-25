import { Component ,EventEmitter,Input, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { BookModel } from '../home-page.component';
import { NavbarComponent } from "../../navbar/navbar.component";
import { Router } from '@angular/router';
@Component({
    selector: 'app-book-card-list',
    standalone: true,
    templateUrl: './book-card-list.component.html',
    styleUrl: './book-card-list.component.scss',
    imports: [MatButtonModule, MatCardModule, MatIconModule, NavbarComponent]
})
export class BookCardListComponent {
  @Input() books: BookModel[]=[];
@Output() addCart = new EventEmitter<BookModel>();
 

  addToCart(book:BookModel){
    //console.log("book:",book);
    this.addCart.emit(book)
  }

}
