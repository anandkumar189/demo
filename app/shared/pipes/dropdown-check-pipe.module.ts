
import { NgModule} from '@angular/core';
import { DropdownCheckPipe } from './dropdown-check.pipe';


@NgModule({

  declarations:[
    DropdownCheckPipe
  ],
  exports: [
    DropdownCheckPipe
  ]
})


export class DropdownCheckPipeModule {}
