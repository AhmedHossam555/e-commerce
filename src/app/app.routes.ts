import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BrandsComponent } from './components/pages/brands/brands.component';
import { CartsComponent } from './components/pages/carts/carts.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { LoginComponent } from './components/auth-components/login/login.component';
import { RegisterComponent } from './components/auth-components/register/register.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    {path:'', redirectTo: 'home',pathMatch:'full'},
    {path:'home', component: HomeComponent,canActivate:[authGuard], title:'home' },
    {path:'brands',component: BrandsComponent,canActivate:[authGuard], title:'brands' },
    {path:'cart', component: CartsComponent,canActivate:[authGuard], title: 'cart'},
    {path:'products', component: ProductsComponent,canActivate:[authGuard], title:'products'},
    {path:'categories', component:CategoriesComponent,canActivate:[authGuard],title:'categories' },
    {path:'login', component: LoginComponent, title:'login'},
    {path:'register', component: RegisterComponent, title:'register'},
    {path:'**', component:NotfoundComponent}
];
