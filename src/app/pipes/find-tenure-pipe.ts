import {Pipe, PipeTransform} from '@angular/core';
import {TenureGameFull} from '../../api';

@Pipe({
  name: 'findTenure'
})
export class FindTenurePipe implements PipeTransform {
  transform(tenures: TenureGameFull[], officeId: string): TenureGameFull | undefined {
    const matching = tenures.filter(tenure => tenure.office.id === officeId);
    if (matching.length === 0) {
      return undefined
    }
    return matching[matching.length - 1];
  }
}
