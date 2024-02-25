import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { Products } from '../products/products.component';

@Component({
  selector: 'app-info-detail',
  standalone: true,
  imports:  [MatIconModule,MatCardModule],
  templateUrl: './info-detail.component.html',
  styleUrl: './info-detail.component.scss'
})
export class InfoDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: Products, public dialogRef: MatDialogRef<InfoDetailComponent>) {
  }

  close() {
    this.dialogRef.close();
  }
}
