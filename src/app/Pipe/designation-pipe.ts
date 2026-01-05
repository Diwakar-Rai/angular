import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'designation',
})
export class DesignationPipe implements PipeTransform {
  transform(value: string) {
    let valuearray = value.split(' ');
    let str = '';
    for (let val of valuearray) {
      str += val[0] + '.';
    }
    return str.toUpperCase();
  }
}
