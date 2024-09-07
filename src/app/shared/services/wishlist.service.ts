import { FilterPipe } from './../pipe/filter.pipe';
import { HttpClient } from '@angular/common/http';
import { Injectable, ElementRef, Input } from '@angular/core';
import { Enviroment } from '../../Base/enviroment';
import {  map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
 
  constructor(private _http: HttpClient) { 
    this.getALLWishListId()
  }
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
  getALLWishListId():Observable<any>{
     return this._http.get(`${Enviroment.baseUrl}/api/v1/wishlist`).pipe(
      map((res:any)=>{
        let product_id: any[] = [];
        res.data.forEach( (ele:any) => {
          product_id.push(ele._id)
        });
        return product_id;
      })
    );
  }

}
