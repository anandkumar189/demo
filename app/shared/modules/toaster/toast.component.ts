import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'mv-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastMessagesComponent implements OnInit {

  messages: any = [];
  messageIndex = [];
  toasterTimeout = 2000;
  toasterTimeoutRef;
  errorMessage;
  uid = 0;
  toasterData;

  errorCount = 0;
  constructor(private toast: ToastService) { }

  ngOnInit() {

    this.toast.messageObservable$.subscribe((data) => {
    this.toasterData = data;

    data['uid'] = this.uid;
    this.messages.push(data);
    this.clearTimer(this.uid);

        // if (data.style == 'danger' || data.style == 'warning' ) {
        //   this.messages.push(data);
        //   this.errorCount += 1;
        // } else {
        //   data['uid'] = this.uid;
        //   this.messages.push(data);
        //   this.clearTimer(this.uid);
        // }
    });

  }
  clearTimer(uid) {

    // if (this.toasterData .style == 'warning') {
    //   this.toasterTimeoutRef = setTimeout((id) => {

    //     for (const  dataIndex in this.messages) {
    //       if (this.messages[dataIndex].uid == id) {
    //         this.messages.splice(dataIndex, 1 );
    //       }
    //     }

    // }, 15000, uid);
    // }
    this.toasterTimeoutRef = setTimeout((id) => {

        for (let dataIndex in this.messages) {
          if (this.messages[dataIndex].uid == id) {
            this.messages.splice(dataIndex, 1 );
          }
        }
        // console.log('this.message',this.messages);
    }, this.toasterTimeout, uid);
  }

  // clearTimer(index) {

  //   clearTimeout(this.toasterTimeoutRef);
  //   this.toasterTimeoutRef = setTimeout(() => {
  //       console.log('clear data');
  //       this.messages.splice(this.messages.length - 1, 1 );

  //       if (this.messages.length > 0) {
  //           this.clearTimer();
  //       }
  //   }, this.toasterTimeout);
  // }

  dismiss(itemKey) {

    if(!(this.messages[itemKey].hasOwnProperty('uid'))) {
      this.errorCount -= 1 ;
    }
    this.messages.splice(itemKey, 1);
  }

}
