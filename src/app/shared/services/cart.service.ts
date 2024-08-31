import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../Base/enviroment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  header:any = {
    token: localStorage.getItem('userToken'),
  }

  constructor(private _http: HttpClient) { }
  addProductToCart(id:string):Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/api/v1/cart`,{
      productId: id,
    },{
      headers: this.header,
    })
  }
  updateCartProduct(id:string, count: number):Observable<any>{
    return this._http.put(`${Enviroment.baseUrl}/api/v1/cart/${id}`,{
      count: count,
    },{
      headers: this.header,
    })
  }
  getLoggedUserCart( ):Observable<any>{
    return this._http.get(`${Enviroment.baseUrl}/api/v1/cart`,{
      headers: this.header,
    })
  }
  removeSpecificCartItem(id:string ):Observable<any>{
    return this._http.delete(`${Enviroment.baseUrl}/api/v1/cart/${id}`,{
      headers: this.header,
    })
  }
  clearUserCart():Observable<any>{
    return this._http.delete(`${Enviroment.baseUrl}/api/v1/cart`,{
      headers: this.header
    })
  }
}
