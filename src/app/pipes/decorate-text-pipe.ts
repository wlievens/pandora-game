import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'decorateText'
})
export class DecorateTextPipe implements PipeTransform {
  transform(value: string): unknown {
    return value
      .replace(/\n/g, '<br>')
      .replace(/“/g, '“<i>')
      .replace(/”/g, '</i>”')
      ;
  }
}
