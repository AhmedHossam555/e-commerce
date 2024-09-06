import { Data } from './../../../shared/interface/cart';
import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { MainSliderComponent } from "../main-slider/main-slider.component";
import { CategoriesSliderComponent } from "../categories-slider/categories-slider.component";
import { Root } from '../../../shared/interface/product';
import { ProductService } from '../../../shared/services/product.service';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { FilterPipe } from '../../../shared/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { ChangeColorDirective } from '../../../shared/directive/change-color.directive';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainSliderComponent, RouterLink, CategoriesSliderComponent,CurrencyPipe, FilterPipe, FormsModule,ChangeColorDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  productList:Root[ ] = []
  searchData:string = ''
  constructor(private _ProductService: ProductService, private _CartService: CartService, private _toastrService: ToastrService, private _Router: Router,private _wishList: WishlistService){

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCartItems();
    localStorage.setItem('currentPage',this._Router.url);
  }
  getAllCartItems(){
    this._CartService.getLoggedUserCart().subscribe((resp)=>{
      this._CartService.cartItemNumber.next(resp.numOfCartItems)
    })
  }
  getAllProducts(){
    this._ProductService.getProducts().subscribe({
      next: (resp)=>{
        this.productList = resp.data;
      },
      error: () =>{},
    
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
 

  addToWishList(id: string){
    
    this._wishList.addProductToWishList(id).subscribe({
      next:(resp)=>{
        if(resp.status == 'success'){
          this._toastrService.success(resp.message);
          console.log(resp.data)
        }
      }
    })
  
  }


}

