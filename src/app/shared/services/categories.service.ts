import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../../Base/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient) { }

  getAllCategories():Observable<any>{
    return this._http.get(`${Enviroment.baseUrl}/api/v1/categories`)
  }
}
