
import {  Component, OnInit} from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Data, Product2 } from '../../../shared/interface/cart';
import { Router, RouterLink } from '@angular/router';
import { FlowbitService } from '../../../shared/services/flowbit.service';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit{
  productList: Product2[] = [];
  cartItems!: any ; //:Data
  cart!:any;
  constructor(private _CartService: CartService, private _Router:Router,private flowbiteService:FlowbitService,private _toatr: ToastrService){}
  ngOnInit(): void {
    this.getAllCartItems();
    localStorage.setItem('currentPage',this._Router.url);
    this.flowbiteService.loadFlowbite(()=>{})
  }
  getAllCartItems(){
    this._CartService.getLoggedUserCart().subscribe((resp)=>{
      this.cartItems = resp.data;
      this.cart = resp;
      this.productList = resp.data.products;
      this._CartService.cartItemNumber.set(resp.numOfCartItems)
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
        this._CartService.cartItemNumber.set(resp.numOfCartItems)
      }
    })
  }
  removeItem(id: string){
    this._CartService.removeSpecificCartItem(id).subscribe((resp)=>{
      this.cartItems = resp.data;
      this.productList =resp.data.products; 
      this._CartService.cartItemNumber.set(resp.numOfCartItems)
     })
  }
  clearCart(){
    this._CartService.clearUserCart().subscribe((resp)=>{
      if(resp.message == "success"){
        this.getAllCartItems();
        this._toatr.success('Clear Your Cart Success ')
        this._CartService.cartItemNumber.set(resp.numOfCartItems)
      }
    })
  }
}
