import {AsyncPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, RouterLink} from '@angular/router';
import {GamePartyService, PartyGameFull} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';
import {Compass} from '../../components/compass/compass';
import {GovernmentFlagUrlPipe} from '../../pipes/government-flag-url-pipe';

@Component({
  selector: 'pt-party-page',
  imports: [
    AsyncPipe,
    Compass,
    GovernmentFlagUrlPipe,
    RouterLink,
  ],
  templateUrl: './party-page.html',
  styleUrl: './party-page.scss'
})
export class PartyPage implements OnInit {
  worldId?: string;
  party$?: LoadedObject<PartyGameFull>;

  constructor(
    private route: ActivatedRoute,
    private partyService: GamePartyService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const worldId = params['worldId'];
      const partyId = params['partyId'];
      this.worldId = worldId;
      this.party$ = new LoadedObject<PartyGameFull>(() => this.partyService.gameGetPartyById(worldId, partyId));
    });
  }
}
