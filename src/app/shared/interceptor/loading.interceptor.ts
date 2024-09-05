import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const ngx_spinner = inject(NgxSpinnerService);
  ngx_spinner.show()
  return next(req).pipe(finalize(()=>{
    ngx_spinner.hide()
  }));
};
