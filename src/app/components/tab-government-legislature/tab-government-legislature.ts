import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BodyGameFull, BodyType, GameBodyService, GovernmentGameFull} from '../../../api';
import {HemisphereDiagram} from '../hemisphere-diagram/hemisphere-diagram';

@Component({
  selector: 'pt-tab-government-legislature',
  imports: [
    HemisphereDiagram,
    AsyncPipe,
    NgTemplateOutlet,
  ],
  templateUrl: './tab-government-legislature.html',
  styleUrl: './tab-government-legislature.scss'
})
export class TabGovernmentLegislature implements OnChanges {
  @Input()
  government?: GovernmentGameFull;

  bodyLegislature$: Observable<BodyGameFull | undefined> = of(undefined);
  bodyLowerChamber$: Observable<BodyGameFull | undefined> = of(undefined);
  bodyUpperChamber$: Observable<BodyGameFull | undefined> = of(undefined);

  constructor(
    private bodyService: GameBodyService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('government' in changes) {
      const {bodyService, government} = this;
      if (government) {
        function loadBody(government: GovernmentGameFull, type: BodyType) {
          const body = government.bodies.find(body => body.type == type);
          if (!body) {
            return of(undefined);
          }
          return bodyService.gameGetBodyById(government.world.id, body.id);
        }

        this.bodyLegislature$ = loadBody(government, BodyType.Legislature);
        this.bodyLowerChamber$ = loadBody(government, BodyType.LowerChamber);
        this.bodyUpperChamber$ = loadBody(government, BodyType.UpperChamber);
        /*
        const legislativeBodyTypes: BodyType[] = [BodyType.Legislature, BodyType.LowerChamber, BodyType.UpperChamber];
        forkJoin(government.bodies
          .filter(body => legislativeBodyTypes.includes(body.type))
          .map(body => this.bodyService.gameGetBodyById(worldId, body.id))
        ).subscribe(bodies => {
        });
         */
      }
    }
  }
}
