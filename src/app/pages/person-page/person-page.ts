import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GamePersonService, PersonGameFull} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';
import {PortraitUrlPipe} from '../../pipes/portrait-url-pipe';

@Component({
  selector: 'pt-person-page',
  imports: [
    AsyncPipe,
    PortraitUrlPipe,
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
