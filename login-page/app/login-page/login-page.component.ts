import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatInputModule,FormsModule,MatIconModule,MatButtonModule,MatFormFieldModule,MdbCheckboxModule,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
 //constructor(private _router:Router)
  value1 = 'Enter username'
  value2 = 'Password'
  hide = true;
// birinci yol
  emailFormControl= new FormControl('',[Validators.required]);
// ikinici yol
  loginForm = new FormGroup({
  email:new FormControl("",[Validators.required]),
  passord :new FormGroup("",[Validators.required])
})

  isDisable(){
    return !this.loginForm.dirty;
    // return !(this.emailFormControl.valid && this.passwordFormControl.valid);
    // return (this.emailFormControl.invalid && this.passwordFormControl.invalid);)
  }
  isDisableformGroup(): boolean{
  return !this.loginForm.valid;
}
// goToRegister(){
//   this._router.navigateByUrl('/register')
// }

}

// ReactiveFormsModule tanımla
// Formalanına ngModel antığında bağlayacapın değişkeni olutşrud ts ts de 
// html alanında input alanı içine bu tanımladığın değişkeni tanımlayarak bağlamış ol