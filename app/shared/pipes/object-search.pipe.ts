import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'search' })
export class ObjectSearchText implements PipeTransform {
  transform(items , args )  {

    if (items !== undefined) {
      let isSearch = (data) => {
        var isAll = false;
        if (typeof data === 'object') {
          for (var z in data) {
            if (isAll = isSearch(data[z])) {
              break;
            }
          }
        } else {
          if (typeof args === 'number') {
            isAll = data === args;
          } else {
            isAll = data
              .toString()
              .match(new RegExp(args, 'i'));
          }
        }
        return isAll;
      };
      return items.filter(isSearch);
    }
  }

}
