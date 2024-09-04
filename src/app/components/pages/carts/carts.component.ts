
import {  Component, OnInit} from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Data, Product2 } from '../../../shared/interface/cart';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit{
  productList: Product2[] = [];
  cartItems!: any ; //:Data
  constructor(private _CartService: CartService, private _Router:Router){}
  ngOnInit(): void {
    this.getAllCartItems();
    localStorage.setItem('currentPage',this._Router.url)
  }
  getAllCartItems(){
    this._CartService.getLoggedUserCart().subscribe((resp)=>{
      this.cartItems = resp.data;
      this.productList = resp.data.products;
      this._CartService.cartItemNumber.next(resp.numOfCartItems)
    })
  }
  updateProduct(id: string, count: number){
    if(count==0){
      this.removeItem(id);
    }
    this._CartService.updateCartProduct(id,count).subscribe({
      next: (resp)=>{
        this.cartItems = resp.data;
        this.productList =resp.data.products;
        this._CartService.cartItemNumber.next(resp.numOfCartItems)
      }
    })
  }
  removeItem(id: string){
    this._CartService.removeSpecificCartItem(id).subscribe((resp)=>{
      this.cartItems = resp.data;
      this.productList =resp.data.products; 
      this._CartService.cartItemNumber.next(resp.numOfCartItems)
     })
  }
  clearCart(){
    this._CartService.clearUserCart().subscribe((resp)=>{
      this._CartService.cartItemNumber.next(resp.numOfCartItems)
    })
  }
}
