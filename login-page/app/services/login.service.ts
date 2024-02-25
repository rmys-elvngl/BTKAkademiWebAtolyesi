import { Injectable } from '@angular/core';
import { GlobalKeys } from '../models/global-keys.enum';
import { RegisterModel } from '../models/register-form.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  //1. register metodu
  register(payload:RegisterModel){
    let userList = this.getUsers() ? this.getUsers():[];
    userList.push(payload)
    const obj = JSON.stringify([userList])
    localStorage.setItem(GlobalKeys.REGISTER,obj)
  }
 //login olduğumuz kullanıcı datalarını ayrı bir yerde tutmak için yapıyoruz 
  login(payload:any){
    localStorage.setItem(GlobalKeys.LOGIN,payload)
  }
 //kayıtlı dataların silinip üzerine yazılmamamsı için
  getUsers(){
    const users = JSON.parse(localStorage.getItem(GlobalKeys.REGISTER)!); //kesin gelecek diyoruz 
    return users;
  }
}
