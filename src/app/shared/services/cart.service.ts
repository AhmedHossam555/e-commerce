import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit} from '@angular/core';
import { Enviroment } from '../../Base/enviroment';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  cartItemNumber = new BehaviorSubject(0)
  constructor(private _http: HttpClient) {

   }
   ngOnInit(): void{
    this.getLoggedUserCart().subscribe({
      next: (resp)=>{
        console.log("Hi")
        this.cartItemNumber.next(resp.numOfCartItems)
      }
    })
    
   }
  
   
  addProductToCart(id:string):Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/api/v1/cart`,{
      productId: id,
    },{
      headers:{
        token: localStorage.getItem('userToken')!,
      }  
    })
  }
  updateCartProduct(id:string, count: number):Observable<any>{
    return this._http.put(`${Enviroment.baseUrl}/api/v1/cart/${id}`,{
      count: count,
    },{
      headers:{
        token: localStorage.getItem('userToken')!,
      }  
    })
  }
  getLoggedUserCart( ):Observable<any>{
    return this._http.get(`${Enviroment.baseUrl}/api/v1/cart`,{
      headers:{
        token: localStorage.getItem('userToken')!,
      }  
    })
  }
  removeSpecificCartItem(id:string ):Observable<any>{
    return this._http.delete(`${Enviroment.baseUrl}/api/v1/cart/${id}`,{
      headers:{
        token: localStorage.getItem('userToken')!,
      }  
    })
  }
  clearUserCart():Observable<any>{
    return this._http.delete(`${Enviroment.baseUrl}/api/v1/cart`,{
      headers:{
        token: localStorage.getItem('userToken')!,
      }  
    })
  }
}
