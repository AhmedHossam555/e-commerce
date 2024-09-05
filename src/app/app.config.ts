import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { headersInterceptor } from './shared/interceptor/headers.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withViewTransitions()), provideClientHydration(),importProvidersFrom(RouterModule,BrowserAnimationsModule,
    ToastrModule.forRoot()
  ),
    provideHttpClient(withFetch(), withInterceptors([headersInterceptor]))
    
  ]
};
