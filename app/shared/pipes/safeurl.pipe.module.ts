import { NgModule } from '@angular/core';
import { SafePipe } from './safeurl.pipe';



@NgModule({
  declarations: [SafePipe],
  exports: [SafePipe]
})
export class SafePipeModule { }
