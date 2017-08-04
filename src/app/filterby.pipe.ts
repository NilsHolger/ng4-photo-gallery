import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterImage'
})
export class FilterImagePipe implements PipeTransform {

  transform(value: any[], args: any): any {
    if (args === 'all') {
      return value;
    }
    else {
      return value.filter(value => {
        return value.category === args;
      });
      }
    }
}
