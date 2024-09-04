import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logoutGuard: CanActivateFn = (route, state) => {
  let x = inject(PLATFORM_ID);
  let _Router = inject(Router);
  if(isPlatformBrowser(x)){
    if(window.localStorage.getItem('userToken') != null){
      _Router.navigate([localStorage.getItem('currentPage')]);
      return false;
    }else {
      return true;
    }
  }else{
    return true;
  }
 
};
