import {HttpInterceptorFn} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';

import {loginExpiredInterceptor} from './login-expired-interceptor';

describe('loginExpiredInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => loginExpiredInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
