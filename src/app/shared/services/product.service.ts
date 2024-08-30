import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../Base/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<any>{
    return this._http.get(`${Enviroment.baseUrl}/api/v1/products`);
  }
  getSpecificProduct(id:string): Observable<any>{
    return this._http.get(`${Enviroment.baseUrl}/api/v1/products/${id}`)
  }

}
