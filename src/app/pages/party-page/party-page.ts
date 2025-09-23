import {AsyncPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GamePartyService, PartyGameFull} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';

@Component({
  selector: 'pt-party-page',
  imports: [
    AsyncPipe
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
