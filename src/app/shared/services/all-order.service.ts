import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../../Base/enviroment';
import { CartService } from './cart.service';
@Injectable({
  providedIn: 'root'
})
export class AllOrderService {
  constructor(private _http: HttpClient, private _cart: CartService) { }
  getAllOrder(id:string):Observable<any>{
    return this._http.get(`${Enviroment.baseUrl}/api/v1/orders/user/${id}`)
  }
}
