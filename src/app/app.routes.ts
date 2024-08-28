import { Routes } from '@angular/router';
import { HomeComponent } from './components/blank-components/home/home.component';
import { BrandsComponent } from './components/blank-components/brands/brands.component';
import { CartsComponent } from './components/blank-components/carts/carts.component';
import { ProductsComponent } from './components/blank-components/products/products.component';
import { CategoriesComponent } from './components/blank-components/categories/categories.component';
import { LoginComponent } from './components/auth-components/login/login.component';
import { RegisterComponent } from './components/auth-components/register/register.component';
import { NotfoundComponent } from './components/blank-components/notfound/notfound.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'brands',component: BrandsComponent },
    {path:'cart', component: CartsComponent},
    {path:'products', component: ProductsComponent},
    {path:'categories', component:CategoriesComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'**', component:NotfoundComponent}
];
