import {AsyncPipe, DecimalPipe} from '@angular/common';
import {Component, OnDestroy} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {map, Observable} from 'rxjs';
import {GameWorldService, WorldGameSummary} from '../../../api';
import {GeoMapLayerGrid} from '../../geo/geo-map-layer-grid/geo-map-layer-grid';
import {GeoMapLayerWorldNations} from '../../geo/geo-map-layer-world-nations/geo-map-layer-world-nations';
import {GeoMapLayerWorldTerritories} from '../../geo/geo-map-layer-world-territories/geo-map-layer-world-territories';
import {GeoMap} from '../../geo/geo-map/geo-map';

@Component({
  selector: 'pt-world-list-page',
  imports: [
    AsyncPipe,
    DecimalPipe,
    MatButton,
    MatCardModule,
    RouterLink,
    GeoMapLayerWorldTerritories,
    GeoMap,
    GeoMapLayerWorldNations,
    GeoMapLayerGrid,
  ],
  templateUrl: './world-list-page.html',
  styleUrl: './world-list-page.scss'
})
export class WorldListPage implements OnDestroy {
  worlds$: Observable<WorldGameSummary[]>;

  centerLongitude = 0;

  private timer: number;

  constructor(
    private worldService: GameWorldService
  ) {
    this.worlds$ = worldService.gameGetWorlds().pipe(
      map(result => result.objects)
    );

    const interval = 10; // milliseconds
    const speed = 20; // degrees per second
    this.timer = setInterval(() => {
      this.centerLongitude += speed * interval / 1000;
      if (this.centerLongitude > 180) {
        this.centerLongitude -= 360;
      }
    }, interval);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    this.timer = 0;
  }
}
