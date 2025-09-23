import {Component, Input} from '@angular/core';
import {ControlPosition, IControl, ScaleControl} from 'maplibre-gl';
import {GeoControl} from '../geo-map/geo-map';

@Component({
  selector: 'pt-geo-map-control-scale',
  imports: [],
  templateUrl: './geo-map-control-scale.html',
  styleUrl: './geo-map-control-scale.scss',
  providers: [{provide: GeoControl, useExisting: GeoMapControlScale}]
})
export class GeoMapControlScale extends GeoControl {
  @Input()
  position: ControlPosition = 'bottom-left';

  @Input()
  width: number = 150;

  override render(): { control: IControl, position: ControlPosition } {
    const control = new ScaleControl({
      maxWidth: this.width,
      unit: 'metric'
    });
    return {control, position: this.position};
  }
}
