import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpEvent,
    HttpRequest,
    HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class AppInterceptor implements HttpInterceptor {
    /**
     * 
     * @param request 
     * @param next 
     */
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(httpRequest.clone({
            setHeaders: {
                'Authorization': 'Bearer Wookie2019'
            }
        }));
    }
}
