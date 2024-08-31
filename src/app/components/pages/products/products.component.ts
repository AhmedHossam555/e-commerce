import { CartService } from './../../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Root } from '../../../shared/interface/product';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  productList:Root[ ] = []
  constructor(private _ProductService: ProductService, private _CartService:CartService, private _toastrService: ToastrService){
  }
  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    this._ProductService.getProducts().subscribe({
      next: (resp)=>{
        this.productList = resp.data;
      },
      error: () =>{}
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
