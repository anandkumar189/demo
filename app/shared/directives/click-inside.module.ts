import { NgModule} from '@angular/core';
import { ClickInsideDirective } from './click-inside.directive';


@NgModule({
  declarations: [
    ClickInsideDirective
  ],
  exports: [
    ClickInsideDirective
  ]
})




export class ClickInsideDirectiveModule {}
