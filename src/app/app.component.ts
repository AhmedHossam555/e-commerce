import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { CartService } from './shared/services/cart.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  title = 'e-commerce';
  constructor(@Inject(PLATFORM_ID) private x: Object, private _cartService: CartService){}
  ngOnInit(): void {
    if(isPlatformBrowser(this.x)){
      this._cartService.getLoggedUserCart().subscribe((resp)=>{
        this._cartService.cartItemNumber.next(resp.numOfCartItems)
      })
    }
  }

}
