import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {Configuration} from '../api';
import {environment} from '../environments/environment';
import {routes} from './app.routes';
import {credentialsInterceptor} from './interceptors/credentials-interceptor';
import {loginExpiredInterceptor} from './interceptors/login-expired-interceptor';

const provideApiConfiguration = {
  provide: Configuration,
  useValue: new Configuration({
    basePath: environment.apiUrl
  })
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(withInterceptors([credentialsInterceptor, loginExpiredInterceptor])),
    provideApiConfiguration,
  ]
};
