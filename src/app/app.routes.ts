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
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { CheckOutComponent } from './components/pages/check-out/check-out.component';
import { AllOrdersComponent } from './components/pages/all-orders/all-orders.component';
import { VerifyEmailComponent } from './components/auth-components/forget/verify-email/verify-email.component';
import { VerifyCodeComponent } from './components/auth-components/forget/verify-code/verify-code.component';
import { ResetPasswordComponent } from './components/auth-components/forget/reset-password/reset-password.component';
import { logoutGuard } from './shared/guard/logout.guard';
import { WishlistComponent } from './components/pages/wishlist/wishlist.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home',pathMatch:'full'},
    {path:'home', component: HomeComponent,canActivate:[authGuard], title:'home' },
    {path:'brands',component: BrandsComponent,canActivate:[authGuard], title:'brands' },
    {path:'cart', component: CartsComponent,canActivate:[authGuard], title: 'cart'},
    {path:'products', component: ProductsComponent,canActivate:[authGuard], title:'products'},
    {path: 'productDetails/:id',component: ProductDetailsComponent, canActivate:[authGuard], title:'productDetails'},
    {path:'categories', component:CategoriesComponent,canActivate:[authGuard],title:'categories' },
    {path:'checkout', component:CheckOutComponent,canActivate:[authGuard],title:'checkout' },
    {path:'wishlist', component: WishlistComponent,canActivate:[authGuard], title:'wishlist'},
    {path:'allorders', component:AllOrdersComponent,canActivate:[authGuard],title:'allorders'},
    {path:'vemail', component: VerifyEmailComponent,title:'verify email'},
    {path:'vcode', component: VerifyCodeComponent,title:'verify code'},
    {path:'rpassword',component: ResetPasswordComponent,title:'Reset Password'},
    {path:'login', component: LoginComponent, title:'login', canActivate:[logoutGuard]},
    {path:'register', component: RegisterComponent, title:'register', canActivate:[logoutGuard]},
    {path:'**', component:NotfoundComponent}
];
