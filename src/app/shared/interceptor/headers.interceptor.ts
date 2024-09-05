import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';


export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  let x = inject(PLATFORM_ID);
  if(isPlatformBrowser(x)){
    if(localStorage.getItem('userToken') !== null){
      if(req.url.includes('cart') || req.url.includes('wishlist') || req.url.includes('checkout-session') ){
        req = req.clone({
          setHeaders:  {token: localStorage.getItem('userToken')!}
        })
      }
    }  
  } 

  return next(req);
};
