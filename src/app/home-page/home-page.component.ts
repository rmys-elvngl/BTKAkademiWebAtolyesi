import { Component } from '@angular/core';
import { BooksData } from '../book.consts';
import { BookTableComponent } from "./book-table/book-table.component";
import { BookCardListComponent } from "./book-card-list/book-card-list.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { BookService } from '../book.service';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [BookTableComponent,MatButtonModule, BookCardListComponent, NavbarComponent,MatBadgeModule,MatIcon]
})
export class HomePageComponent {
  books: BookModel[] | any = BooksData
  categories: string[]=[];
  cartList : BookModel[] = [];
  // categories: string[]=["Tümü"];
  filteredBooks:BookModel[] | any=BooksData;
  removedBooks:BookModel[] | any=BooksData;
  constructor(private router: Router,private _bookService:BookService) {}

  ngOnInit(){
     
     this.books.forEach((item:BookModel) => {
     if(!this.categories.includes(item.category)){
      this.categories.push(item.category);
     }
     });
     this.cartList = this._bookService.getCart(); //localStorgae da data varsa onu setle 
  }
  setBooksForCategories(event:string){
this.filteredBooks = this.books.filter((data:BookModel) => data.category === event)
  }

  // setBooksForCategories(event:string){
    // if(event !== "Tümü"){
    //   this.filteredBooks = this.books.filter((data:BookModel) => data.category === event)
    // }
  //   this.filteredBooks = this.books.filter((data:BookModel) => data.category === event)
  //     }
  resetBooksForCategories(){
    this.filteredBooks = this.books;
  }
 deleteAllBooks(){
  this.filteredBooks = []
 }
 goToCart(){
  this.router.navigate(['/cart']);
 }
 addToCart(event:BookModel){
   this.cartList.push(event)
   this._bookService.addCart(this.cartList)
  
   console.log("cartList: ", this.cartList)
 }
}

export interface BookModel{
  name : string,
  author : string,
  year : string,
  image : string, 
  category: string,
  star: string,
  id: string,
}
