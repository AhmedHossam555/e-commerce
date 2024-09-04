import { Component, OnInit } from '@angular/core';
import { MainSliderComponent } from "../main-slider/main-slider.component";
import { CategoriesSliderComponent } from "../categories-slider/categories-slider.component";
import { Root } from '../../../shared/interface/product';
import { ProductService } from '../../../shared/services/product.service';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainSliderComponent, RouterLink, CategoriesSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  productList:Root[ ] = []
  constructor(private _ProductService: ProductService, private _CartService: CartService, private _toastrService: ToastrService, private _Router: Router){

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

}
