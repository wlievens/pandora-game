import {AsyncPipe, JsonPipe, TitleCasePipe} from '@angular/common';
import {Component} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ActivatedRoute, Params, RouterLink} from '@angular/router';
import {GamePersonService, PersonGameFull} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';
import {ColorBox} from '../../components/color-box/color-box';
import {Portrait} from '../../components/portrait/portrait';
import {GovernmentFlagUrlPipe} from '../../pipes/government-flag-url-pipe';
import {PortraitUrlPipe} from '../../pipes/portrait-url-pipe';
import {SymbolUrlPipe} from '../../pipes/symbol-url-pipe';

@Component({
  selector: 'pt-person-page',
  imports: [
    AsyncPipe,
    ColorBox,
    GovernmentFlagUrlPipe,
    PortraitUrlPipe,
    RouterLink,
    SymbolUrlPipe,
    TitleCasePipe,
    MatTooltipModule,
    Portrait,
  ],
  templateUrl: './person-page.html',
  styleUrl: './person-page.scss'
})
export class PersonPage {
  worldId?: string;
  person$?: LoadedObject<PersonGameFull>;

  constructor(
    private route: ActivatedRoute,
    private personService: GamePersonService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const worldId = params['worldId'];
      const personId = params['personId'];
      this.worldId = worldId;
      this.person$ = new LoadedObject<PersonGameFull>(() => this.personService.gameGetPersonById(worldId, personId));
    });
  }
}
