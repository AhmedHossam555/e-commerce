import { Component } from '@angular/core';
import { MainSliderComponent } from "../main-slider/main-slider.component";
import { ProductsComponent } from "../products/products.component";
import { CategoriesSliderComponent } from "../categories-slider/categories-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainSliderComponent, ProductsComponent, CategoriesSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
