import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {
        path:"login",component:LoginPageComponent
    },
    {
      path:"", pathMatch:"full", redirectTo:"/login"
    },
    {
        path:"signup",component:SignUpComponent
    }
];
