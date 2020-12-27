import { Message } from './toast.model';
import { Injectable } from '@angular/core';
import { Subject  } from 'rxjs';

@Injectable()
export class ToastService {
      private message = new Subject<Message>();
      messageObservable$ = this.message.asObservable();
      constructor() { }
      sendMessage(content, style): void {
        const tmpMessage = new Message(content, style);
          this.message.next(tmpMessage);
      }

      success(content, style= 'success'): void {
        const tmpMessage = new Message(content, style);
          this.message.next(tmpMessage);
      }

      error(content, errorMessage = '', style= 'danger'): void {
        const tmpMessage = new Message(content, style, errorMessage);
          this.message.next(tmpMessage);
      }

      info(content, style= 'info'): void {
        const tmpMessage = new Message(content, style);
          this.message.next(tmpMessage);
      }
      warn(content, style= 'warning'): void {
        const tmpMessage = new Message(content, style);
          this.message.next(tmpMessage);
      }
}

