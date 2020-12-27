import { NgModule} from '@angular/core';
import { ClickElsewhereDirective } from './click-outside.directive';


@NgModule({
  declarations: [
    ClickElsewhereDirective
  ],
  exports: [
    ClickElsewhereDirective
  ]
})




export class ClickElsewhereDirectiveModule {}
