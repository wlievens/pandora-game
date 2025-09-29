import {JsonPipe} from '@angular/common';
import {Component, Input} from '@angular/core';
import {GovernmentGameFull} from '../../../api';
import {GeoMapControlNavigation} from '../../geo/geo-map-control-navigation/geo-map-control-navigation';
import {GeoMapLayerWorldNations} from '../../geo/geo-map-layer-world-nations/geo-map-layer-world-nations';
import {GeoMap} from '../../geo/geo-map/geo-map';
import {GovernmentFlagUrlPipe} from '../../pipes/government-flag-url-pipe';

@Component({
  selector: 'pt-tab-government-overview',
  imports: [
    GovernmentFlagUrlPipe,
    GeoMap,
    GeoMapControlNavigation,
    GeoMapLayerWorldNations,
    JsonPipe
  ],
  templateUrl: './tab-government-overview.html',
  styleUrl: './tab-government-overview.scss'
})
export class TabGovernmentOverview {
  @Input()
  government?: GovernmentGameFull;
}
