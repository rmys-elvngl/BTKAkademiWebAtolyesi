import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // FormControl ve FormGroup ekleyin
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-add-product-dialog',
  standalone: true,
  imports: [MatFormFieldModule,ReactiveFormsModule,
    CommonModule,MatDialogModule,FormsModule,MatButtonModule],
  templateUrl: './add-product-dialog.component.html',
  styleUrl: './add-product-dialog.component.scss'
})
export class AddProductDialogComponent implements OnInit {
  product: any = {}; // Boş bir product nesnesi oluştur
  productForm!: FormGroup; // FormGroup oluşturun
  constructor(private cdr: ChangeDetectorRef,  private formBuilder: FormBuilder,
    private http: HttpClient,
    private dialogRef: MatDialogRef<AddProductDialogComponent>) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  products: any[] = [];

  addProduct() {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      this.http.post<any>("https://fakestoreapi.com/products", product).subscribe(
        response => {
          console.log('Ürün başarıyla kaydedildi:', response);
          // Yeni ürünü mevcut ürün listesine ekle
          this.products.push(response);
          // Dialog penceresini kapat
          this.dialogRef.close();
          this.cdr.detectChanges();
        },
        error => {
          console.error('Ürün kaydedilirken bir hata oluştu:', error);
        }
      );
    } else {
      console.error('Form geçersiz. Tüm alanları doldurun.');
    }
  }
async ngOnInit(): Promise<void> {
  // API'den ürünleri al ve products dizisine ata
  this.http.get<any>('https://fakestoreapi.com/products').subscribe(
    response => {
      this.products = response;
    },
    error => {
      console.error('Ürünler alınırken bir hata oluştu:', error);
    }
  );
}
  closeDialog(): void {
    this.dialogRef.close();
  }
}