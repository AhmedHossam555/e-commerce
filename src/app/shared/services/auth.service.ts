import { Injectable } from '@angular/core';
import { Login, Register } from '../interface/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  register(formData: Register): Observable<any>{
    return this._http.post("https://ecommerce.routemisr.com/api/v1/auth/signup", formData);
  }
  login(formData: Login): Observable<any>{
    return this._http.post("https://ecommerce.routemisr.com/api/v1/auth/signin", formData);
  }
}
