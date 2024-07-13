import { HttpInterceptorFn } from '@angular/common/http';

export const strapiInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('strapiToken');
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return next(req);
};
