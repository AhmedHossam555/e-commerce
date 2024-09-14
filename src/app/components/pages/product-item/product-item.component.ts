import { Component, Input } from '@angular/core';
import { Root } from '../../../shared/interface/product';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../shared/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() isAddedToWishList!:boolean;
  
  @Input() product!: Root;

  constructor(private _CartService: CartService, private _toastrService: ToastrService, private _wishList: WishlistService){}
  AddProductCart(productId: string){
    this._CartService.addProductToCart(productId).subscribe({
      next: (rep)=>{
        this._CartService.cartItemNumber.set(rep.numOfCartItems)
        this._toastrService.success(rep.message,'',{
          progressBar: true,
          progressAnimation: 'increasing',
          easeTime: 100,
          timeOut: 3000,
        })
      }
    })
  }
 addToWishList(id: string){
      this._wishList.addProductToWishList(id).subscribe({
        next:(resp)=>{
          if(resp.status == 'success'){
            this.isAddedToWishList = true;
            this._toastrService.success(resp.message);
          }
        }
      })
}
removeFromWishList(id:string){
  this._wishList.removeProductFromWishList(id).subscribe((resp)=>{
    if(resp.status == 'success'){
      this.isAddedToWishList = false;
      this._toastrService.success(resp.message);
    } 
  })
}
}
