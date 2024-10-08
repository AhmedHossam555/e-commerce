import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { BrandsService } from '../../../shared/services/brands.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit{
  isPop:boolean = false;
  imageSrc:WritableSignal<string> = signal('');
  brandsList:WritableSignal<any[]> = signal([])
  constructor(private _brands: BrandsService){

  }
  ngOnInit(): void {
    this.getAllBrands()
  }
  getAllBrands(){
     this._brands.getAllBrands().subscribe((resp)=>{
      this.brandsList.set(resp.data);
     })
  }
  onClick(image:string){
    this.isPop = true;
     this.imageSrc.set(image)
  }
  onClose(){
    this.isPop = false;
  }
}
