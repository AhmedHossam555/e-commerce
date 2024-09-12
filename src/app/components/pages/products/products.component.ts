import { CartService } from './../../../shared/services/cart.service';
import { Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Root } from '../../../shared/interface/product';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';
import { ProductItemComponent } from "../product-item/product-item.component";
import { WishlistService } from '../../../shared/services/wishlist.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  productList:Root[ ] = []
  wishListId: any[]= []
  constructor(private _ProductService: ProductService, private _CartService:CartService, private _toastrService: ToastrService,private _Router: Router,private _wishList: WishlistService){
  }
  x = inject(PLATFORM_ID)
  ngOnInit(): void {
    this.loadWishList()
    
    this.getAllProducts()
    localStorage.setItem('currentPage',this._Router.url)
  if(isPlatformBrowser(this.x)){
    localStorage.setItem('currentPage',this._Router.url)
  }
  }
  loadWishList(){
    this._wishList.getALLWishListId().subscribe({
    next:(res)=>{ this.wishListId = res}
    }
    )
  }
  getAllProducts(){
    this._ProductService.getProducts().subscribe({
      next: (resp)=>{
        this.productList = resp.data;
      }
  })
    }
  
  
  AddProductCart(productId: string){

    this._CartService.addProductToCart(productId).subscribe({
      next: (rep)=>{
        this._CartService.cartItemNumber.next(rep.numOfCartItems)
        this._toastrService.success(rep.message,'',{
          progressBar: true,
          progressAnimation: 'increasing',
          easeTime: 100,
          timeOut: 3000,
        })
      }
    })
  }

}
