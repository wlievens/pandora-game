import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {GamePartyService, GovernmentGameFull, PartyGameSummary} from '../../../api';
import {ColorBox} from '../color-box/color-box';
import {Compass, CompassPoint} from '../compass/compass';

@Component({
  selector: 'pt-tab-government-parties',
  imports: [
    Compass,
    MatCardModule,
    MatExpansionModule,
    ColorBox,
  ],
  templateUrl: './tab-government-parties.html',
  styleUrl: './tab-government-parties.scss'
})
export class TabGovernmentParties implements OnChanges {
  @Input()
  government?: GovernmentGameFull;

  parties: PartyGameSummary[] = [];
  compassPoints: CompassPoint[] = [];

  constructor(
    private partyService: GamePartyService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('government' in changes) {
      const {government} = this;
      if (government) {
        const worldId = government.world.id;
        this.partyService.gameGetParties(worldId, undefined, undefined, JSON.stringify({
          nation: [government.id],
          active: [true]
        })).subscribe(result => {
          const parties = result.objects;
          this.parties = parties;
          this.compassPoints = parties.map(party => ({
            label: party.abbreviation,
            color: party.color,
            x: party.compass[0],
            y: party.compass[1]
          }));
        });
      }
    }
  }
}
