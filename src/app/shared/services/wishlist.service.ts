import { FilterPipe } from './../pipe/filter.pipe';
import { HttpClient } from '@angular/common/http';
import { Injectable, ElementRef } from '@angular/core';
import { Enviroment } from '../../Base/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  
  constructor(private _http: HttpClient) { }
  addProductToWishList(id: string): Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/api/v1/wishlist`, {
      productId: id,
    })
  }
  removeProductFromWishList(id:string): Observable<any>{
    return this._http.delete(`${Enviroment.baseUrl}/api/v1/wishlist/${id}`);
  }
  getALLWishList():Observable<any>{
    return this._http.get(`${Enviroment.baseUrl}/api/v1/wishlist`)
  }

}
