import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CartListComponent } from './cart-list/cart-list.component';

export const routes: Routes = [
    {path:"",component:HomePageComponent}, //anasayfaya düşmesini sağlar
    {path:"home",component:HomePageComponent},
    {path:"cart",component:CartListComponent}
];
