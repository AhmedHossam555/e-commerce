import { afterNextRender, Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  cartNumber:any;
  constructor(private _AuthService: AuthService, private _Router: Router, private _cartService: CartService){
    afterNextRender(()=>{
      this._cartService.getLoggedUserCart().subscribe((resp)=>{
        this._cartService.cartItemNumber.next(resp.numOfCartItems)
      })
    })
    
  }
  ngOnInit(): void {
    this._cartService.cartItemNumber.subscribe({
      next: (resp)=>{this.cartNumber = resp}
    })
    this._AuthService.userData.subscribe(()=>{
      if(this._AuthService.userData.getValue() == null){
        this.isLogin = false;
      }else{
        this.isLogin = true;
      }
    })
 
   
  }
  onLogOut(){
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login']);
    this._AuthService.userData.next(null);
  }

}
