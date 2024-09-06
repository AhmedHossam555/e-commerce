import { Data } from './../../../shared/interface/cart';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { Root } from '../../../shared/interface/product';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  wishList: Root[]=[]
  constructor(private _wishListService: WishlistService, private _toatr: ToastrService,private _CartService:CartService){

  }
  ngOnInit(): void {
    this.getAllWishList()
  }
  getAllWishList(){
    this._wishListService.getALLWishList().subscribe({
      next: (resp)=>{
        this.wishList = resp.data;
      }
    })
  }
  removeWishList(id: string){
    this._wishListService.removeProductFromWishList(id).subscribe({
      next:(resp) =>{
        this.getAllWishList();
        if(resp.status == 'success'){
          this._toatr.success(resp.message)
        }  
      }
    })
  }
  AddToCart(productId: string){
  

      this._CartService.addProductToCart(productId).subscribe({
        next: (rep)=>{
          this._CartService.cartItemNumber.next(rep.numOfCartItems)
          this._toatr.success(rep.message,'',{
            progressBar: true,
            progressAnimation: 'increasing',
            easeTime: 100,
            timeOut: 3000,
          })
        }
      })
    }
  
  
}
