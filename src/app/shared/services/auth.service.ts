import { afterNextRender, Injectable } from '@angular/core';
import { Login, Register, ResetPassword } from '../interface/auth';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Enviroment } from '../../Base/enviroment';
import { jwtDecode } from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private _http: HttpClient) { 
    afterNextRender(()=>{
      this.userInformation();
    })
  }
  register(formData: Register): Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/api/v1/auth/signup`, formData);
  }
  login(formData: Login): Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/api/v1/auth/signin`, formData);
  }
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  userInformation(){
     let decoded = jwtDecode(JSON.stringify(localStorage.getItem('userToken')));
     this.userData.next(decoded)
  }

  verifyEmail(emailData: any):Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/api/v1/auth/forgotPasswords`,emailData)
  }
  verifyResetCode(resetData:any): Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/api/v1/auth/verifyResetCode`,resetData)
  }
  ResetPassword(FormData: ResetPassword):Observable<any>{
    return this._http.put(`${Enviroment.baseUrl}/api/v1/auth/verifyResetCode`,FormData)
  }
}
