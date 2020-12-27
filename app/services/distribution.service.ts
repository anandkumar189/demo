import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'environments/environment';
import * as serviveUrl from 'app/shared/commons/service-url';
import * models from 'app/models';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public httpOption;
  constructor(public http: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }



  private handleError(errorRespose: HttpErrorResponse) {
    if (errorRespose.error instanceof ErrorEvent) {
      return throwError(errorRespose.error);
    } else {
      if (errorRespose.hasOwnProperty('error')) {
        return throwError(errorRespose.error);
      } else {
        return throwError({
          message: 'Internal Server Error'
        });
      }
    }
  }
  getAllJobs(): Observable<models.UserModel> {
    return this.http.get<models.UserModel>(environment.baseUrl + serviveUrl.getAllJobs).pipe(catchError(this.handleError));
  }
  getAllImage(): Observable<any> {
    return this.http.get(environment.baseUrl + serviveUrl.getAllImage).pipe(catchError(this.handleError));
  }

  // getPoi(data: {
  //   // accountname: 'User',
  //   location: string,
  //   poi: Array<string>
  // } ): Observable<any> {
  //   const body = data;
  //   return this
  //     .http
  //     .post(environment.baseUrl +  serviveUrl.getPoi, body).pipe(catchError(this.handleError));
  // }
  // // ******************************************************** */
  // // getUserAuth() {

  // //   return forkJoin([
  // //     this.http.get(environment.baseUrl + '/api/getAppPrivileges').pipe(catchError(this.handleError)),
  // //     this.http.get(environment.baseUrl + '/api/login').pipe(catchError(this.handleError))
  // //   ]).pipe(
  // //     map((data: any[]) => {
  // //       const res = {
  // //         data1: data[0],
  // //         data2: data[1]
  // //       };
  // //       return res;
  // //     }),
  // //     catchError(this.handleError)
  // //   );
  // // }


}

