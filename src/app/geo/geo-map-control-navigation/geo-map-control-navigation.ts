import {Component, Input} from '@angular/core';
import {ControlPosition, IControl, NavigationControl} from 'maplibre-gl';
import {GeoControl} from '../geo-map/geo-map';

@Component({
  selector: 'pt-geo-map-control-navigation',
  imports: [],
  templateUrl: './geo-map-control-navigation.html',
  styleUrl: './geo-map-control-navigation.scss',
  providers: [{provide: GeoControl, useExisting: GeoMapControlNavigation}]
})
export class GeoMapControlNavigation extends GeoControl {
  @Input()
  position: ControlPosition = 'top-right';

  override render(): { control: IControl, position: ControlPosition } {
    const control = new NavigationControl();
    return {control, position: this.position};
  }
}
