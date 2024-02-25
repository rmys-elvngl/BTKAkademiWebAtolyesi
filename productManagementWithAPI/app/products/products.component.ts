import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InfoDetailComponent } from '../info-detail/info-detail.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(private _http: HttpClient, public dialog: MatDialog) {

  }
  ngOnInit(){
    this.getProduct()
  }
  products:Products[] | any = []
  getProduct(){
    this._http.get("https://fakestoreapi.com/products").subscribe(response => {
      this.products = response
      console.log(response);
      
    })
  }
  deleteProduct(index: number) {
    const productId = this.products[index].id; // Sileceğimiz ürünün ID'sini al
    fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Ürün başarıyla silindi:', data);
        // Ürünü yerel listeden de kaldır
        this.products.splice(index, 1);
    })
    .catch(error => {
        console.error('Bir hata oluştu:', error);
    });
}

  openDialog(product:Products) {
    this.dialog.open(InfoDetailComponent,{
      data:product,
      autoFocus : false,
    })
  }
}
export interface Products {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}