import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, signal, WritableSignal} from '@angular/core';
import { Enviroment } from '../../Base/enviroment';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  cartItemNumber:WritableSignal<number> = signal(0)
  constructor(private _http: HttpClient) {

   }
   ngOnInit(): void{
    this.getLoggedUserCart().subscribe({
      next: (resp)=>{
        this.cartItemNumber.set(resp.numOfCartItems)
      }
    })
    
   }
  
   
  addProductToCart(id:string):Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/api/v1/cart`,{
      productId: id,
    },)
  }
  updateCartProduct(id:string, count: number):Observable<any>{
    return this._http.put(`${Enviroment.baseUrl}/api/v1/cart/${id}`,{
      count: count,
    },)
  }
  getLoggedUserCart( ):Observable<any>{
    return this._http.get(`${Enviroment.baseUrl}/api/v1/cart`,)
  }
  removeSpecificCartItem(id:string ):Observable<any>{
    return this._http.delete(`${Enviroment.baseUrl}/api/v1/cart/${id}`,)
  }
  clearUserCart():Observable<any>{
    return this._http.delete(`${Enviroment.baseUrl}/api/v1/cart`,)
  }
}
