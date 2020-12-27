import { NgModule} from '@angular/core';
import { DragDirective } from './dragdrop.directive';


@NgModule({
  declarations: [
    DragDirective
  ],
  exports: [
    DragDirective
  ]
})




export class DragDirectiveModule {}
