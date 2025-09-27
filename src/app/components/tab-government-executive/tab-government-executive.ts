import {AsyncPipe} from '@angular/common';
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BodyGameFull, BodyType, GameBodyService, GovernmentGameFull} from '../../../api';
import {FindTenurePipe} from '../../pipes/find-tenure-pipe';
import {PortraitUrlPipe} from '../../pipes/portrait-url-pipe';
import {ColorBox} from '../color-box/color-box';

@Component({
  selector: 'pt-tab-government-executive',
  imports: [
    AsyncPipe,
    FindTenurePipe,
    ColorBox,
    PortraitUrlPipe,
  ],
  templateUrl: './tab-government-executive.html',
  styleUrl: './tab-government-executive.scss'
})
export class TabGovernmentExecutive implements OnChanges {
  @Input()
  government?: GovernmentGameFull;

  bodyRuler$: Observable<BodyGameFull | undefined> = of(undefined);
  bodyCabinet$: Observable<BodyGameFull | undefined> = of(undefined);

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

        this.bodyRuler$ = loadBody(government, BodyType.Ruler);
        this.bodyCabinet$ = loadBody(government, BodyType.Cabinet);
      }
    }
  }
}
