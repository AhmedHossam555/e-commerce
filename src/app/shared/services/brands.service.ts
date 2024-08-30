import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../../Base/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  constructor(private _http: HttpClient) { }
  
  getAllBrands(): Observable<any>{
    return this._http.get(`${Enviroment.baseUrl}/api/v1/brands`);
  }
}
