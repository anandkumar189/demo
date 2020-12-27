import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phoneCheck"
})
export class PhonePipe implements PipeTransform {
  transform(value: string | number): string {

    value = value.toString()
        .match(/\d*/g).join('')
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/).slice(1).join('-')
        .replace(/-*$/g, '');
    return value.toString();
  }

}
