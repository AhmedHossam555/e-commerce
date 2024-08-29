import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { afterNextRender, afterRender, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent {
  

}
