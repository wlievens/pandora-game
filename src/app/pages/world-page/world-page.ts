import {AsyncPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GameWorldService, WorldGameFull} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';
import {GeoMapControlGlobe} from '../../geo/geo-map-control-globe/geo-map-control-globe';
import {GeoMapControlNavigation} from '../../geo/geo-map-control-navigation/geo-map-control-navigation';
import {GeoMapControlScale} from '../../geo/geo-map-control-scale/geo-map-control-scale';
import {GeoMapLayerWorldNations} from '../../geo/geo-map-layer-world-nations/geo-map-layer-world-nations';
import {GeoMap} from '../../geo/geo-map/geo-map';

@Component({
  selector: 'pt-world-page',
  imports: [
    AsyncPipe,
    GeoMap,
    GeoMapLayerWorldNations,
    GeoMapControlGlobe,
    GeoMapControlScale,
    GeoMapControlNavigation
  ],
  templateUrl: './world-page.html',
  styleUrl: './world-page.scss'
})
export class WorldPage implements OnInit {
  world$?: LoadedObject<WorldGameFull>;

  constructor(
    private route: ActivatedRoute,
    private worldService: GameWorldService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.world$ = new LoadedObject<WorldGameFull>(() => this.worldService.gameGetWorldById(params['worldId'])));
  }
}
