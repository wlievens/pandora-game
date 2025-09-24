import {AsyncPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {GameWorldService, WorldGameFull} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';
import {GeoMapControlGlobe} from '../../geo/geo-map-control-globe/geo-map-control-globe';
import {GeoMapControlNavigation} from '../../geo/geo-map-control-navigation/geo-map-control-navigation';
import {GeoMapControlScale} from '../../geo/geo-map-control-scale/geo-map-control-scale';
import {GeoMapLayerGrid} from '../../geo/geo-map-layer-grid/geo-map-layer-grid';
import {GeoMapLayerWorldNations, NationProperties} from '../../geo/geo-map-layer-world-nations/geo-map-layer-world-nations';
import {GeoMap, MapSelectionEvent} from '../../geo/geo-map/geo-map';

@Component({
  selector: 'pt-world-page',
  imports: [
    AsyncPipe,
    GeoMap,
    GeoMapLayerWorldNations,
    GeoMapControlGlobe,
    GeoMapControlScale,
    GeoMapControlNavigation,
    GeoMapLayerGrid
  ],
  templateUrl: './world-page.html',
  styleUrl: './world-page.scss'
})
export class WorldPage implements OnInit {
  world$?: LoadedObject<WorldGameFull>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private worldService: GameWorldService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.world$ = new LoadedObject<WorldGameFull>(() => this.worldService.gameGetWorldById(params['worldId'])));
  }

  onClickFeature(world: WorldGameFull, event: MapSelectionEvent<NationProperties>) {
    const feature = event.features[0];
    console.log(feature);
    this.router.navigate(['/worlds', world.id, 'governments', feature.id])
  }
}
