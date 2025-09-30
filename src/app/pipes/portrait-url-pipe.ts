import {Pipe, PipeTransform} from '@angular/core';
import {GamePersonService, PersonBase} from '../../api';

@Pipe({
  name: 'portraitUrl'
})
export class PortraitUrlPipe implements PipeTransform {
  constructor(
    private personService: GamePersonService
  ) {
  }

  transform(person: PersonBase, world: { id: string }, tick: number | undefined = undefined): unknown {
    const url = `${this.personService.configuration.basePath}/game/worlds/${world.id}/persons/${person.id}/portrait`;
    if (tick === undefined) {
      return url;
    }
    return `${url}?tick=${tick}`;
  }
}
