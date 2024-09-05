import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { headersInterceptor } from './shared/interceptor/headers.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './shared/interceptor/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withViewTransitions()), provideClientHydration(),importProvidersFrom(RouterModule,BrowserAnimationsModule,
    ToastrModule.forRoot(),NgxSpinnerModule
  ),
    provideHttpClient(withFetch(), withInterceptors([headersInterceptor,loadingInterceptor]))
    
  ]
};
