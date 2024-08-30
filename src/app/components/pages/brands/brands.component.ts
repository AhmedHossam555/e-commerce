import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../../shared/services/brands.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit{
  brandsList:any[] = []
  constructor(private _brands: BrandsService){

  }
  ngOnInit(): void {
    this.getAllBrands()
  }
  getAllBrands(){
     this._brands.getAllBrands().subscribe((resp)=>{
      this.brandsList = resp.data;
      console.log(resp.data)
     })
  }
}
