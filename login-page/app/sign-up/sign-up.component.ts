import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; import { provideNativeDateAdapter } from '@angular/material/core';
import { LoginService } from '../services/login.service';
import { RegisterModel } from '../models/register-form.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatInputModule,FormsModule,MatIconModule,MatButtonModule,MatFormFieldModule,ReactiveFormsModule, MatDatepickerModule,],
  providers: [ReactiveFormsModule,provideNativeDateAdapter(),],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
constructor(private _loginService : LoginService){}

  hide = true;
  startDate = new Date(1990, 0, 1);
  // firstName = new FormControl('', [Validators.required]);
  // lastName = new FormControl('', [Validators.required]);
  // eMail = new FormControl('', [Validators.required]);
  // date = new FormControl('', [Validators.required]);
  // password = new FormControl('', [Validators.required]);
  // rePassword = new FormControl('', [Validators.required]);

  // emailFormControl= new FormControl('',[Validators.required]);
  registerForm = new FormGroup(

    {
      firstName: new FormControl("", [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(5)]),
      email: new FormControl("", [Validators.required, Validators.minLength(5), Validators.email]),
      date: new FormControl("", [Validators.required]),
      rePassword: new FormControl("", [Validators.required, Validators.minLength(5)]),
      password: new FormControl("", [Validators.required, Validators.minLength(5)])

    },)

    public getformNameInvalid(formName:string):Boolean | any{
      return this.registerForm.get(formName)?.invalid;
    }

    ngOnInit(){//value değeri her değiştiiinde console a data gönderir
     this._formChange();
    }
//form alanında değişiklik olduğunda şu işlemi yap / metodu çalıştır
    private _formChange(){
      this.registerForm.get("password")?.valueChanges.subscribe(data=>{
        this.checkEqualsPassword();
      })
      this.registerForm.get("rePassword")?.valueChanges.subscribe(data=>{
        this.checkEqualsPassword();
      })
    }

    //hata mesajlarını döndürme 
    getErrorMessage(formName:string):string{
      if(this.getRegisterForm(formName,"required")){
        return 'You must enter a value';
      }else if(this.getRegisterForm(formName,"minLength")){return "Min karakter sayısı hatası";}
      else if(this.getRegisterForm(formName,"email")){return "Email formatında değer giriniz";}
      else if(this.getRegisterForm(formName,"maxLength")){return "Maksimum karakter sayısını aştınız";}
      else if(this.getRegisterForm(formName,"missmatch")){return "Şifreler aynı değil"}
      else return "";
      //return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    getRegisterForm(formName:string, errorType:string){
      return this.registerForm.get(formName)?.hasError(errorType);
    }

  register() {
    const payload: RegisterModel | any = this.registerForm.value;
    this._loginService.register(payload)
  }
//parolaların aynı olup olmadığını kontrol etmek için
  checkEqualsPassword(){
    if(this.registerForm.get("password")?.value !== this.registerForm.get("rePassword")?.value){
      this.registerForm.get("password")?.setErrors({missmatch:true})
      this.registerForm.get("rePassword")?.setErrors({missmatch:true})
    }
  }
  isDisableForFormGroup(){
    return !this.registerForm.valid && this.checkEqualsPassword();
  }
}














//üç eşit tip kontrolü yapar iki eşit tip kontrolü yapmaz bu ts içindir
