import {Pipe, PipeTransform} from '@angular/core';
import {AdminGovernmentService, GovernmentBase} from '../../api';

@Pipe({
  name: 'governmentFlagUrl'
})
export class GovernmentFlagUrlPipe implements PipeTransform {
  private apiRoot: string;

  constructor(
    governmentService: AdminGovernmentService,
  ) {
    this.apiRoot = governmentService.configuration.basePath!;
  }

  transform(government: GovernmentBase, world: { id: string }): string {
    return `${this.apiRoot}/game/worlds/${world.id}/governments/${government.id}/flag`;
  }
}
