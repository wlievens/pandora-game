import {AsyncPipe, DecimalPipe} from '@angular/common';
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {map, Observable, of} from 'rxjs';
import {GameTerritoryService, GovernmentGameFull, TerritoryGameSummary} from '../../../api';

@Component({
  selector: 'pt-tab-government-territories',
  imports: [
    MatTableModule,
    DecimalPipe,
    AsyncPipe,
  ],
  templateUrl: './tab-government-territories.html',
  styleUrl: './tab-government-territories.scss'
})
export class TabGovernmentTerritories implements OnChanges {
  @Input()
  government?: GovernmentGameFull;

  territories$: Observable<TerritoryGameSummary[]> = of([]);

  constructor(
    private territoryService: GameTerritoryService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('government' in changes) {
      const {government} = this;
      if (government) {
        const worldId = government.world.id;
        this.territories$ = this.territoryService.gameGetTerritories(worldId, undefined, undefined, JSON.stringify({nation: [government.id]}), 100).pipe(
          map(result => result.objects)
        )
      }
    }
  }
}
