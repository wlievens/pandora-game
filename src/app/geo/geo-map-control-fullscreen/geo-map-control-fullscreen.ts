import {Component} from '@angular/core';
import {ControlPosition, FullscreenControl, IControl} from 'maplibre-gl';
import {GeoControl} from '../geo-map/geo-map';

@Component({
  selector: 'pt-geo-map-control-fullscreen',
  imports: [],
  templateUrl: './geo-map-control-fullscreen.html',
  styleUrl: './geo-map-control-fullscreen.scss',
  providers: [{provide: GeoControl, useExisting: GeoMapControlFullscreen}]
})
export class GeoMapControlFullscreen extends GeoControl {
  override render(): { control: IControl; position: ControlPosition } {
    return {
      control: new FullscreenControl(),
      position: 'top-right'
    };
  }
}
