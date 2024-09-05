import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {
  platform = inject(PLATFORM_ID);
  constructor(private _TranslateService:TranslateService) {
    this._TranslateService.setDefaultLang('en');
    this.changeDirection();
   }
   changeDirection(){
    if(isPlatformBrowser(this.platform)){
      let langUsing = localStorage.getItem('lang')!;
      this._TranslateService.use(langUsing)
      if(langUsing == 'en'){
        document.documentElement.dir='ltr';
      }else if(langUsing == 'ar'){
        document.documentElement.dir = 'rtl';
      }
    }
   }
   changelanguage(lang:string){
    
    if(isPlatformBrowser(this.platform)){
      localStorage.setItem('lang',lang)!;
      let langUsing = localStorage.getItem('lang')!;
      this._TranslateService.use(langUsing);
      this.changeDirection();
   }
  }
}
