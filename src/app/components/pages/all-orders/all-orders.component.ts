import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { AllOrderService } from '../../../shared/services/all-order.service';
import { order } from '../../../shared/interface/order';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit{
  orders:order[] = []
  id:string = '';
  constructor(private _allOrder: AllOrderService){
  }
  ngOnInit() {
   
    this.id = window.localStorage.getItem('id')!;
    this.getAllOrders();
  }
  getAllOrders(){
    console.log(this.id)
    this._allOrder.getAllOrder(this.id).subscribe({
      next:(res)=>{
        this.orders = res;
        
      }
    })
  }
}
