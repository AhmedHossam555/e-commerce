import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective implements OnInit {
  wishListId: string[] = []

  constructor(private _ele: ElementRef, private _wish:WishlistService) { }
  @HostListener('click') changeColor(){
    this._ele.nativeElement.classList.toggle('heart')
  }
  ngOnInit(): void {
    
  }
   
}
