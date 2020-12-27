import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: "[appDropDown]",
  exportAs:"appDropDown"
})

export class ClickInsideDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleopen() {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }
}
