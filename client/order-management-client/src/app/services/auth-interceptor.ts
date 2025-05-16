import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = localStorage.getItem('access_token');
  let modifiedReq = req;
  if (token && !req.url.includes('signin')) {
    modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true
    });
  } else {
    modifiedReq = req.clone({ withCredentials: true });
  }
  return next(modifiedReq);
};
