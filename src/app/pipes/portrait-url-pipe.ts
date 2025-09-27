import {Pipe, PipeTransform} from '@angular/core';
import {GamePersonService, PersonBase, WorldBase} from '../../api';

@Pipe({
  name: 'portraitUrl'
})
export class PortraitUrlPipe implements PipeTransform {
  constructor(
    private personService: GamePersonService
  ) {
  }

  transform(person: PersonBase, world: WorldBase): unknown {
    return `${this.personService.configuration.basePath}/game/worlds/${world.id}/persons/${person.id}/portrait`;
  }
}
