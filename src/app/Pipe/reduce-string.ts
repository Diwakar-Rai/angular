import { Pipe } from '@angular/core';

@Pipe({
  name: 'reducelength',
})
export class ReduceStringPipe {
  transform(value: string, length: number = 20) {
    console.log(value);

    if (value.length > length) {
      return value.slice(0, length) + '...';
    }
    return value;
  }
}
