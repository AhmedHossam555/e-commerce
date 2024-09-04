import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from '../../../shared/services/categories.service';
@Component({
  selector: 'app-categories-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './categories-slider.component.html',
  styleUrl: './categories-slider.component.scss'
})
export class CategoriesSliderComponent implements OnInit {
  
  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 4
        },
        940: {
          items: 6
        }
      },
      nav: true
    }
  
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
