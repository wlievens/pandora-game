import {Pipe, PipeTransform} from '@angular/core';
import {AdminFlagService, FlagBase} from '../../api';

@Pipe({
  name: 'flagUrl'
})
export class FlagUrlPipe implements PipeTransform {
  private readonly apiUrl: string;

  constructor(
    adminFlagService: AdminFlagService,
  ) {
    this.apiUrl = adminFlagService.configuration.basePath!;
  }

  transform(flag: FlagBase | null | undefined): string {
    const id = flag?.id || 'undefined';
    return `${this.apiUrl}/game/flags/${id}/image`;
  }
}
