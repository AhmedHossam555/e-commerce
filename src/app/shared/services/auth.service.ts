import { Injectable } from '@angular/core';
import { Login, Register } from '../interface/auth';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Enviroment } from '../../Base/enviroment';
import { jwtDecode } from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private _http: HttpClient) { }
  register(formData: Register): Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/v1/auth/signup`, formData);
  }
  login(formData: Login): Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/v1/auth/signin`, formData);
  }
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  userInformation(){
     let decoded = jwtDecode(JSON.stringify(localStorage.getItem('userToken')));
     this.userData.next(decoded)
  }
}
