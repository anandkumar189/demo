import { Pipe, PipeTransform } from "@angular/core";
interface Checkbox {
  name: any;
  value: any;
  flag?: boolean;
}

@Pipe({
  name: "dropdownCheck"
})
export class DropdownCheckPipe implements PipeTransform {
  transform(value: Array<string | number>): Array<Checkbox> {
    return this.converToDropdownData(value);
  }

  converToDropdownData(dataArray: Array<string | number>): Array<Checkbox> {
    const convertedData: Array<Checkbox> = [];

    for (const data of dataArray) {
      convertedData.push({
        name: data,
        value: data,
        flag: false
      });
    }
    return convertedData;
  }
}
