import {HttpInterceptorFn} from '@angular/common/http';
import {catchError, Subject} from 'rxjs';

const loginExpiredSubject = new Subject<void>();
export const loginExpired$ = loginExpiredSubject.asObservable();

export const loginExpiredInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: any) => {
      if (error.status == 401 || error.status == 403) {
        loginExpiredSubject.next();
      }
      throw error;
    })
  );
};
