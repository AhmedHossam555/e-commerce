import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Root } from '../../../shared/interface/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  productList:Root[ ] = []
  constructor(private _ProductService: ProductService){

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

}
