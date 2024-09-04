import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cart.service';


export const authGuard: CanActivateFn = (route, state) => {
  let _Router = inject(Router);
  let platform = inject(PLATFORM_ID);
  if(isPlatformBrowser(platform)){
    if(localStorage.getItem('userToken') != null){
      return true;
    }else{
      _Router.navigate(['/login'])
      return false;
    }
  }else{
    return false;
  }
};
