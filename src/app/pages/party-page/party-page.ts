import {AsyncPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, RouterLink} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {GamePartyService, GameSpectrumService, PartyGameFull, SpectrumGameSummary} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';
import {Compass} from '../../components/compass/compass';
import {IdeologyRatings} from '../../components/ideology-ratings/ideology-ratings';
import {GovernmentFlagUrlPipe} from '../../pipes/government-flag-url-pipe';

@Component({
  selector: 'pt-party-page',
  imports: [
    AsyncPipe,
    Compass,
    GovernmentFlagUrlPipe,
    RouterLink,
    IdeologyRatings,
  ],
  templateUrl: './party-page.html',
  styleUrl: './party-page.scss'
})
export class PartyPage implements OnInit {
  worldId?: string;
  party$?: LoadedObject<PartyGameFull>;
  spectra$: Observable<SpectrumGameSummary[]> = of([]);

  constructor(
    private route: ActivatedRoute,
    private partyService: GamePartyService,
    private spectrumService: GameSpectrumService,
  ) {
  }

  ngOnInit() {
    this.spectra$ = this.spectrumService.gameGetSpectra().pipe(
      map(result => result.objects)
    );
    this.route.params.subscribe((params: Params) => {
      const worldId = params['worldId'];
      const partyId = params['partyId'];
      this.worldId = worldId;
      this.party$ = new LoadedObject<PartyGameFull>(() => this.partyService.gameGetPartyById(worldId, partyId));
    });
  }
}
