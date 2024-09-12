import { Routes } from '@angular/router';
import { authGuard } from './shared/guard/auth.guard';
import { logoutGuard } from './shared/guard/logout.guard';

export const routes: Routes = [
    {path:'', redirectTo: 'home',pathMatch:'full'},
    {path:'home', loadComponent:()=>import('../app/components/pages/home/home.component').then((c)=>c.HomeComponent),canActivate:[authGuard], title:'home' },
    {path:'brands',loadComponent:()=>import('../app/components/pages/brands/brands.component').then((c)=>c.BrandsComponent),canActivate:[authGuard], title:'brands' },
    {path:'cart', loadComponent:()=>import('../app/components/pages/carts/carts.component').then((c)=>c.CartsComponent),canActivate:[authGuard], title: 'cart'},
    {path:'products', loadComponent:()=>import('../app/components/pages/products/products.component').then((c)=>c.ProductsComponent),canActivate:[authGuard], title:'products'},
    {path: 'productDetails/:id',loadComponent:()=>import('../app/components/pages/product-details/product-details.component').then((c)=>c.ProductDetailsComponent), canActivate:[authGuard], title:'productDetails'},
    {path:'categories', loadComponent:()=>import('../app/components/pages/categories/categories.component').then((c)=>c.CategoriesComponent),canActivate:[authGuard],title:'categories' },
    {path:'checkout', loadComponent:()=>import('../app/components/pages/check-out/check-out.component').then((c)=>c.CheckOutComponent),canActivate:[authGuard],title:'checkout' },
    {path:'wishlist',loadComponent:()=>import('../app/components/pages/wishlist/wishlist.component').then((c)=>c.WishlistComponent),canActivate:[authGuard], title:'wishlist'},
    {path:'allorders', loadComponent:()=>import('../app/components/pages/all-orders/all-orders.component').then((c)=>c.AllOrdersComponent),canActivate:[authGuard],title:'allorders'},
    {path:'vemail', loadComponent:()=>import('../app/components/auth-components/forget/verify-email/verify-email.component').then((c)=>c.VerifyEmailComponent),title:'verify email'},
    {path:'vcode', loadComponent:()=>import('../app/components/auth-components/forget/verify-code/verify-code.component').then((c)=>c.VerifyCodeComponent),title:'verify code'},
    {path:'rpassword',loadComponent:()=>import('../app/components/auth-components/forget/reset-password/reset-password.component').then((c)=>c.ResetPasswordComponent),title:'Reset Password'},
    {path:'login', loadComponent:()=>import('../app/components/auth-components/login/login.component').then((c)=>c.LoginComponent), title:'login', canActivate:[logoutGuard]},
    {path:'register', loadComponent:()=>import('../app/components/auth-components/register/register.component').then((c)=>c.RegisterComponent), title:'register', canActivate:[logoutGuard]},
    {path:'**',loadComponent:()=>import('../app/components/pages/notfound/notfound.component').then((c)=>c.NotfoundComponent),title:'notfound'}
];
