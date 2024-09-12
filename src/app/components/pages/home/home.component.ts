import { Data } from './../../../shared/interface/cart';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
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
import { ProductsComponent } from "../products/products.component";
import { ProductItemComponent } from "../product-item/product-item.component";
import { FlowbitService } from '../../../shared/services/flowbit.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainSliderComponent, RouterLink, CategoriesSliderComponent, CurrencyPipe, FilterPipe, FormsModule, ChangeColorDirective, ProductsComponent, ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  productList:Root[ ] = []
  searchData:string = '';
  wishListId: any[]= []


  constructor(private _ProductService: ProductService, private _CartService: CartService, private _toastrService: ToastrService, private _Router: Router,private _wishList: WishlistService,private _flowbiteService: FlowbitService){
  
  }

  ngOnInit(): void {
    this.loadWishList();
    this.getAllProducts();
    this.getAllCartItems();
    localStorage.setItem('currentPage',this._Router.url);
    this._flowbiteService.loadFlowbite(()=>{})
  }
  loadWishList(){
    this._wishList.getALLWishListId().subscribe({
    next:(res)=>{ this.wishListId = res}
    })
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
      }
    
    })
  }
  // AddProductCart(productId: string){

  //   this._CartService.addProductToCart(productId).subscribe({
  //     next: (rep)=>{
  //       this._CartService.cartItemNumber.next(rep.numOfCartItems)
  //       this._toastrService.success(rep.message,'',{
  //         progressBar: true,
  //         progressAnimation: 'increasing',
  //         easeTime: 100,
  //         timeOut: 3000,
  //       })
  //     }
  //   })
  // }
 
  

//   addToWishList(id: string, event:any){
    
//     if(event.currentTarget.classList.contains('heart')){
//       event.currentTarget.classList.remove('heart');
//       this._wishList.removeProductFromWishList(id).subscribe((resp)=>{
//         if(resp.status == 'success'){
//           this._toastrService.success(resp.message);
//         } 
//       })

//     }else{
//       event.currentTarget.classList.add('heart')
//       this._wishList.addProductToWishList(id).subscribe({
//         next:(resp)=>{
//           if(resp.status == 'success'){
//             this._toastrService.success(resp.message);
//           }
//         }
//       })
//   }
// }
 
  
}

