import { Component,  inject,  OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { CartService } from '../../../shared/services/cart.service';
import { FlowbitService } from '../../../shared/services/flowbit.service';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MyTranslateService } from '../../../shared/services/my-translate.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  cartNumber:any;
  x = inject(PLATFORM_ID);
  constructor(private _AuthService: AuthService, private _Router: Router, private _cartService: CartService, private flowbiteService: FlowbitService,private _myTranslate: MyTranslateService){
  }
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      
    });
  
     
      if(isPlatformBrowser(this.x)){
        this._cartService.cartItemNumber.subscribe({
          next: (resp)=>{this.cartNumber = resp}
        })
      }
     
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
  change(lang:string){
    this._myTranslate.changelanguage(lang);
  }

}
