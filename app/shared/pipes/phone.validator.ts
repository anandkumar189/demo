import { AbstractControl } from '@angular/forms';

export function ValidatePhone(control: AbstractControl) {

  if (control.value) {
    return { validPhoneNumber: new RegExp(/^(1-)?\d{3}-\d{3}-\d{4}$/).test(control.value) };
  }
  return null;
}
