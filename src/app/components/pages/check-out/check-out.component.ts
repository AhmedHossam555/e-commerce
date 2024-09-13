import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../../shared/services/cart.service';
import { PaymentService } from '../../../shared/services/payment.service';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent implements OnInit {
  //id!: string;
  id: WritableSignal<string> = signal('');
  constructor(private _CartService: CartService, private _checkoutSrvice: PaymentService){

  }
  ngOnInit(): void {
   this.getCartId()
  }
  getCartId(){
    this._CartService.getLoggedUserCart().subscribe({
      next: (resp)=>{
        this.id.set(resp.data._id)
      }
    })
  }
  cartForm: FormGroup = new FormGroup({
     details: new FormControl(null),
     phone: new FormControl(null),
     city: new FormControl(null)
  })
  sendData(){
    this._checkoutSrvice.getCheckOut(this.id(), this.cartForm.value).subscribe({
      next: (resp)=>{
        window.location.href = resp.session.url;
      }
    })
  }
}
