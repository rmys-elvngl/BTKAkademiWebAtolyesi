import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../home-page/home-page.component';
import { BooksData } from '../book.consts';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { BookService } from '../book.service';
@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent implements OnInit {
  // @Input() books: BookModel[]=[]; 
  cartList:BookModel[] = [];
constructor(private _bookService: BookService){}
 
  ngOnInit(){
  //  homepage den eklenen datları çekceğiz
   this.cartList  =  this._bookService.getCart()
}
 
}
