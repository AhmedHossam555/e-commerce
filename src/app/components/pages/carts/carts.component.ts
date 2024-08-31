
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { afterNextRender, afterRender, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Data, Product2 } from '../../../shared/interface/cart';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit{
  productList: Product2[] = [];
  cartItems!: Data;
  constructor(private _CartService: CartService){}
  ngOnInit(): void {
    this.getAllCartItems();
  }
  getAllCartItems(){
    this._CartService.getLoggedUserCart().subscribe((resp)=>{
      this.cartItems = resp.data;
      this.productList = resp.data.products;
    })
  }
  updateProduct(id: string, count: number){
    this._CartService.updateCartProduct(id,count).subscribe({
      next: (resp)=>{
        this.cartItems = resp.data;
        this.productList =resp.data.products;
      }
    })
  }
  removeItem(id: string){
    this._CartService.removeSpecificCartItem(id).subscribe((resp)=>{
      this.cartItems = resp.data;
      this.productList =resp.data.products;    })
  }
  clearCart(){
    this._CartService.clearUserCart().subscribe((resp)=>{
    })
  }
}
