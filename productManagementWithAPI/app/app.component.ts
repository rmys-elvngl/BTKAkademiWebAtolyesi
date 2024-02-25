import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HttpClientModule, MatCardModule, MatButtonModule, MatDialogModule, CommonModule, NavbarComponent, ProductsComponent]
})
export class AppComponent {
  title = 'productManagementwithAPI';
}
