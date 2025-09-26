import {Pipe, PipeTransform} from '@angular/core';
import {LonLat} from '../../api';

@Pipe({
  name: 'lonlat'
})
export class LonLatPipe implements PipeTransform {
  degreesMinutes(decimal: number): string {
    const degrees = Math.floor(Math.abs(decimal));
    const minutes = Math.floor((Math.abs(decimal) - degrees) * 60);
    return `${degrees}°${minutes}'`;
  }

  transform(point: LonLat | undefined | null): string {
    if (!point) {
      return '';
    }
    const lonDir = point.lon >= 0 ? 'E' : 'W';
    const latDir = point.lat >= 0 ? 'N' : 'S';
    const lonStr = this.degreesMinutes(point.lon);
    const latStr = this.degreesMinutes(point.lat);
    return `${lonStr}${lonDir} ${latStr}${latDir}`;
  }
}
