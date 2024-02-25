import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookModel } from './home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {
subject = new Subject<BookModel[]>();

addCart(book:BookModel[]){
  const payload = JSON.stringify(book) 
  //book modeli string e çevirip tarayıcıda saklıyor işlenebilecek formata çeviriyor
  localStorage.setItem("card",payload)
  // this.subject.next(book) //datayı state e kaydetmek (çerezlere)
  console.log(localStorage.getItem("card"))
}
getCart(){
 const response =  localStorage.getItem("card")
 if(response){
   return JSON.parse(response) //stringten obje formatina geri çevirmek için
 }else return [];
 
}

  constructor() { }
}
