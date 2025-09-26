import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {
  transform(length: number | undefined, start: number = 0): number [] {
    if (length === undefined) {
      return [];
    }
    const array: number[] = [];
    for (let i = start; i < length; i++) {
      array.push(i);
    }
    return array;
  }
}
