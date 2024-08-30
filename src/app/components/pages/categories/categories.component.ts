import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../shared/services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{
  categoriesList:any[] = [];
  constructor(private _categoriesServices: CategoriesService){

  }
  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories(){
    this._categoriesServices.getAllCategories().subscribe((resp)=>{
      this.categoriesList = resp.data
    })
  }
}
