import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newHeader = req.headers.set('Content-Type', 'application/json');
    const token = this.authService.getToken();
    if (token) {
      newHeader = newHeader.append('Authorization', token);
    }
    const authReq = req.clone({
      headers: newHeader
    });
    return next.handle(authReq);
  }
}
