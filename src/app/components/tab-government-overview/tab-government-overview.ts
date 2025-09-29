import {Component, Input} from '@angular/core';
import {AtlasCellType, GovernmentGameFull} from '../../../api';
import {GeoMapControlNavigation} from '../../geo/geo-map-control-navigation/geo-map-control-navigation';
import {GeoMapLayerBackground} from '../../geo/geo-map-layer-background/geo-map-layer-background';
import {GeoMapLayerGrid} from '../../geo/geo-map-layer-grid/geo-map-layer-grid';
import {GeoMapLayerWorldNations} from '../../geo/geo-map-layer-world-nations/geo-map-layer-world-nations';
import {GeoMapLayerWorldTerritories} from '../../geo/geo-map-layer-world-territories/geo-map-layer-world-territories';
import {GeoMap} from '../../geo/geo-map/geo-map';
import {GovernmentFlagUrlPipe} from '../../pipes/government-flag-url-pipe';

@Component({
  selector: 'pt-tab-government-overview',
  imports: [
    GovernmentFlagUrlPipe,
    GeoMap,
    GeoMapControlNavigation,
    GeoMapLayerWorldNations,
    GeoMapLayerGrid,
    GeoMapLayerBackground,
    GeoMapLayerWorldTerritories
  ],
  templateUrl: './tab-government-overview.html',
  styleUrl: './tab-government-overview.scss'
})
export class TabGovernmentOverview {
  @Input()
  government?: GovernmentGameFull;

  readonly landCellTypes = [AtlasCellType.Continent, AtlasCellType.Island, AtlasCellType.Pole];
}
