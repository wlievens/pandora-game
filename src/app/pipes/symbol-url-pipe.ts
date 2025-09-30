import {Pipe, PipeTransform} from '@angular/core';
import {SymbolService} from '../../api';

@Pipe({
  name: 'symbolUrl'
})
export class SymbolUrlPipe implements PipeTransform {
  private apiRoot: string;

  constructor(
    symbolService: SymbolService,
  ) {
    this.apiRoot = symbolService.configuration.basePath!;
  }

  transform(key?: string): string {
    if (!key) {
      return `${this.apiRoot}/symbols/missing`;
    }
    return `${this.apiRoot}/symbols/${key}`;
  }
}
