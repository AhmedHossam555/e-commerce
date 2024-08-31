import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Details } from '../../../shared/interface/details';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  id!: string;
  productDetails!:Details;
  constructor(private _ActivateRoute: ActivatedRoute, private _ProductService: ProductService, private _CartService:CartService,private _toastrService: ToastrService){
    this._ActivateRoute.params.subscribe((para)=>{
      this.id = para['id'];
    })
    this.getProductDetails()
  }
  getProductDetails(){
    this._ProductService.getSpecificProduct(this.id).subscribe((resp)=>{
      this.productDetails = resp.data;
    })
  }
  AddProductCart(){

    this._CartService.addProductToCart(this.id).subscribe({
      next: (rep)=>{
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
