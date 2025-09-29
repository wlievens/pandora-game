import {Component} from '@angular/core';
import {LayerSpecification} from '@maplibre/maplibre-gl-style-spec';
import maplibregl from 'maplibre-gl';
import {GeoLayer, RenderedLayer} from '../geo-map/geo-map';

@Component({
  selector: 'pt-geo-map-layer-background',
  imports: [],
  templateUrl: './geo-map-layer-background.html',
  styleUrl: './geo-map-layer-background.scss',
  providers: [{provide: GeoLayer, useExisting: GeoMapLayerBackground}]
})
export class GeoMapLayerBackground extends GeoLayer {
  override mapSetupDone(): void {
  }

  override refresh(map: maplibregl.Map): void {
  }

  override render(): RenderedLayer {
    const layers: LayerSpecification[] = [
      {
        id: 'background',
        type: 'background',
        paint: {
          'background-color': '#c7edff'
        }
      }
    ];
    return {layers};
  }
}
