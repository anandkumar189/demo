import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Subscription , Observable,throwError} from 'rxjs';
// import { UseraccessService } from '../../services/useraccess.service';
import * as constants from './app.constants';
// import { ToastService } from '../modules/toaster/toast.service';

// import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  public openApis: any = constants.openApis;

  constructor(private router: Router,
    // public toast: ToastService
    ) { }
  /**
   * intercept method will run before http call sent
   * @param req Http Request
   * @param next  HttpHandler , handles all the http requests
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /** Set auth token , common headers here */

    let openApiFlag = false;
    for (let api of this.openApis) {
      if (req.url.indexOf(api) !== -1) {
        openApiFlag = true;
        // console.log('has data');
        break;
      }
    }

    //  Set auth token only if api is not open /
    if (openApiFlag) {
      let token = localStorage.getItem('token');
      if (token) {
        const newRequest = req.clone({
          // set auth token to api here
          headers: req.headers.set('Authorization', 'bearer ' + token)
        });
        req = newRequest;
      }
    }

    /**
     * you can show common loader here
     */

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
        // console.log('intercepter event',event);
        return event;
      }),
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          // let data = {
          //   reason: error && error.error.reason ? error.error.reason : '',
          //   status: error.status
          // };
          // // console.log(data);

          // if (error.status === 401) {
          //     // redirect to the login route
          //     this.toast.error('Session Timeout!!.Please Login Again');
          //     localStorage.clear();
          //     this.router.navigate(['/login']);
          // }
        }
        return throwError(error);
      }));

    // return next.handle(req).do(
    //     (event: HttpEvent<any>) => {
    //         if (event instanceof HttpResponse) {
    //             // do stuff with response if you want
    //         }
    //     },
    //     (err: any) => {
    //         if (err instanceof HttpErrorResponse) {
    //             if (err.status === 401) {
    //                 // redirect to the login route
    //                 // this.router.navigate(['/']);
    //             }
    //         }
    //     }
    // );
  }

  // *******************************************************************
}
