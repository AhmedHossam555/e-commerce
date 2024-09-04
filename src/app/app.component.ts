import { afterNextRender, AfterViewInit, Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { CartService } from './shared/services/cart.service';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from './shared/services/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'e-commerce';
  x = inject(PLATFORM_ID);
  constructor( private _CartService: CartService){
  }
  ngOnInit() {
    if(isPlatformBrowser(this.x)){
      this.getAllCartItems();
    }
  }
  
  getAllCartItems(){
    this._CartService.getLoggedUserCart().subscribe((resp)=>{
      this._CartService.cartItemNumber.next(resp.numOfCartItems)
    })
  }

}
