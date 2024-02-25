import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  loginForm = new FormGroup(
    {email : new FormControl("", [Validators.required, Validators.minLength(5), Validators.email]),
     password: new FormControl("",  [Validators.required, Validators.minLength(5),Validators.email])
  
  },
  )

  isDisableForFormGroup() : boolean{
    return !this.loginForm.valid;
  }
}
