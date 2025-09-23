import {Component} from '@angular/core';
import {ControlPosition, GlobeControl, IControl} from 'maplibre-gl';
import {GeoControl} from '../geo-map/geo-map';

@Component({
  selector: 'pt-geo-map-control-globe',
  imports: [],
  templateUrl: './geo-map-control-globe.html',
  styleUrl: './geo-map-control-globe.scss',
  providers: [{provide: GeoControl, useExisting: GeoMapControlGlobe}]
})
export class GeoMapControlGlobe extends GeoControl {
  override render(): { control: IControl; position: ControlPosition } {
    return {
      control: new GlobeControl(),
      position: 'top-right'
    };
  }
}
