import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule,HttpClientModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  categories:categories[] | any=[];
  filteredProducts: any[] = []; 
  constructor(private http: HttpClient,public dialog: MatDialog) {
    this.http.get<any>("https://fakestoreapi.com/products/categories").subscribe(response=>{
      this.categories=response;
    })
  }
  getCategories(category:string){
    if(category==="electronics") return "Elektronik";
    else if(category==="jewelery") return "Mücevherat"
    else if(category==="men's clothing") return "Erkek Kıyafet"
    else if(category==="women's clothing") return "Kadın Kıyafet"
    else return ""
  }
  openAddProductDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '400px', // İletişim kutusunun genişliği
    });
}
filterByCategory(category: string) {
  this.http.get<any>('https://fakestoreapi.com/products').subscribe(
      (response) => {
          // API'den gelen tüm ürünleri burada alın
          this.filteredProducts = response.filter((product: any) => {
              // Ürünün kategorisi belirli kategoriyle eşleşiyorsa, true döndür
              return product.category.toLowerCase() === category.toLowerCase();
          });
          // Filtrelenmiş ürünleri burada işleyebilirsiniz
          console.log(`Kategori "${category}" için gelen ürünler:`, this.filteredProducts);
      },
      (error) => {
          console.error('Ürünler alınırken bir hata oluştu:', error);
      }
  );
}


}
export interface categories{
  category:string;
}