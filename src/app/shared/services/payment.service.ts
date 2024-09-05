import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from '../../Base/enviroment';
import { Observable } from 'rxjs';
import { Payment } from '../interface/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _http: HttpClient) { }
  getCheckOut(id: string,formData: Payment): Observable<any>{
    return this._http.post(`${Enviroment.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{
      shippingAddress: formData,
    },
  )
  }
}
