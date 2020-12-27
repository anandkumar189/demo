import { Injectable } from '@angular/core';
import { Subject  } from 'rxjs';

/**
 * Service to notify local storage values
 */
@Injectable({
  providedIn: 'root'
})
export class CommonDataObservableService {
      private request = new Subject<any>();
      public requestObservable$ = this.request.asObservable();

      private response = new Subject<any>();
      public responseObservable$ = this.response.asObservable();

      constructor() { }

      sendData(data: any): void {
          this.request.next(data);
      }

      responseData(data: any): void {
        this.response.next(data);
      }
}

