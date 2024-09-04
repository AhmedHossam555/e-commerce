import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logoutGuard: CanActivateFn = (route, state) => {
  let x = Inject(PLATFORM_ID);
  let _Router = Inject(Router);
  if(isPlatformBrowser(x)){
    if(window.localStorage.getItem('userToken') != null){
      _Router.navigate();
      return false
    }else {
      return true
    }
  }
  return true;
};
