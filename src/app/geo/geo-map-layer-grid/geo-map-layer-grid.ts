import {Component, Input} from '@angular/core';
import {GeoJSONSourceSpecification, LayerSpecification, SourceSpecification} from '@maplibre/maplibre-gl-style-spec';
import {Feature} from 'geojson';
import maplibregl from 'maplibre-gl';
import {v4 as uuidv4} from 'uuid';
import {GeoLayer, RenderedLayer} from '../geo-map/geo-map';

@Component({
  selector: 'pt-geo-map-layer-grid',
  imports: [],
  templateUrl: './geo-map-layer-grid.html',
  styleUrl: './geo-map-layer-grid.scss',
  providers: [{provide: GeoLayer, useExisting: GeoMapLayerGrid}]
})
export class GeoMapLayerGrid extends GeoLayer {
  @Input()
  interval: number = 30;

  @Input()
  labeled: boolean = true;

  override mapSetupDone() {
  }

  override refresh(map: maplibregl.Map) {
  }

  override render(): RenderedLayer {
    const {interval, labeled} = this;

    const id = uuidv4();
    const meridians: GeoJSON.Feature[] = [];
    const parallels: GeoJSON.Feature[] = [];

    for (let n = 0; n < 180; n += interval) {
      for (let lon of [-n, +n]) {
        meridians.push({
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [[lon, -90], [lon, 90]]
          },
          properties: {
            position: lon,
            label: `${Math.abs(lon)}°${lon < 0 ? 'W' : lon > 0 ? 'E' : ''}`
          }
        });
      }
    }

    for (let n = 0; n < 90; n += interval) {
      for (let lat of [-n, +n]) {
        parallels.push({
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [[-180, lat], [180, lat]]
          },
          properties: {
            position: lat,
            label: `${Math.abs(lat)}°${lat < 0 ? 'S' : lat > 0 ? 'N' : ''}`
          }
        });
      }
    }

    const source: GeoJSONSourceSpecification = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [...meridians, ...parallels]
      }
    };

    const layers: LayerSpecification[] = [
      {
        id: 'grid-lines',
        type: 'line',
        source: id,
        paint: {
          'line-color': '#000000',
          'line-opacity': 0.2,
          'line-width': [
            'case',
            ['==', ['get', 'position'], 0], 2.0,
            1.0
          ],
        }
      },
    ];
    if (labeled) {
      layers.push({
          id: 'grid-labels',
          type: 'symbol',
          source: id,
          layout: {
            'text-field': ['get', 'label'],
            'text-size': 12,
            'text-anchor': 'top',
            'text-offset': [0, 0],
            'symbol-placement': 'line',
            'text-allow-overlap': true,
          },
          paint: {
            'text-color': '#333333',
            'text-halo-color': '#ffffff',
            'text-halo-width': 2
          }
        }
      );
    }

    const sources: { [key: string]: SourceSpecification } = {};
    sources[id] = source;
    return {sources, layers};
  }
}
