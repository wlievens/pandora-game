import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {LayerSpecification, SourceSpecification} from '@maplibre/maplibre-gl-style-spec';
import maplibregl, {MapMouseEvent, VectorTileSource} from 'maplibre-gl';
import {GovernmentGameFull} from '../../../api';
import {environment} from '../../../environments/environment';
import {GeoLayer, LayerEventHandler, MapSelectionEvent, RenderedLayer, ZOOM_LIMITS} from '../geo-map/geo-map';

export interface NationProperties {
  id: string;
  name: string;
  title: string;
  color: string;
  flag_id: string;
  neighbors: string[];
}

@Component({
  selector: 'pt-geo-map-layer-world-nations',
  imports: [],
  templateUrl: './geo-map-layer-world-nations.html',
  styleUrl: './geo-map-layer-world-nations.scss',
  providers: [{provide: GeoLayer, useExisting: GeoMapLayerWorldNations}]
})
export class GeoMapLayerWorldNations extends GeoLayer implements OnChanges {
  @Input()
  worldId?: string;

  @Input()
  baseOpacity: number = 0.60;

  @Input()
  labels: boolean = true;

  @Input()
  highlights: GovernmentGameFull[] = [];

  @Output()
  selected = new EventEmitter<MapSelectionEvent<NationProperties>>();

  readonly layerKeyFill = `layer-fill-${this.sourceId}`;
  readonly layerKeyShading = `layer-shading-${this.sourceId}`;
  readonly layerKeyOutline = `layer-outline-${this.sourceId}`;
  readonly layerKeyLabels = `layer-labels-${this.sourceId}`;

  mapSetupDone(): void {
  }

  override refresh(map: maplibregl.Map): void {
    const source = map.getSource(this.sourceId);
    if (source) {
      (source as VectorTileSource).setTiles([this.generateUrl()]);
    }
  }

  override render(): RenderedLayer {
    const {sourceId, baseOpacity, labels, highlights} = this;
    const {min: minZoom, max: maxZoom} = ZOOM_LIMITS;

    const sourceMVT: SourceSpecification = {
      type: 'vector',
      tiles: [this.generateUrl()],
      minzoom: minZoom,
      maxzoom: maxZoom,
    };

    const sources: { [key: string]: SourceSpecification } = {};
    sources[sourceId] = sourceMVT;

    const dataLayer = 'cells';

    const minShading = 1;
    const maxShading = 8;

    const highlightIds = highlights.map(highlight => highlight.id);

    const layers: LayerSpecification[] = []
    layers.push(
      {
        id: this.layerKeyFill,
        type: 'fill',
        source: sourceId,
        'source-layer': dataLayer,
        paint: {
          'fill-color': ['get', 'color'],
          'fill-opacity': baseOpacity,
        },
        filter: highlightIds.length === 0 ? true : ['in', 'id', ...highlightIds]
      },
      {
        id: this.layerKeyShading,
        type: 'line',
        source: sourceId,
        'source-layer': dataLayer,
        layout: {
          'line-join': 'miter',
          'line-cap': 'round',
          'line-miter-limit': 10,
        },
        paint: {
          'line-color': ['interpolate', ['linear'], 0.20, 0, ['get', 'color'], 1, 'black'],
          'line-width': ['interpolate', ['linear'], ['zoom'], minZoom, minShading, maxZoom, maxShading],
          'line-opacity': 1,
          'line-offset': ['interpolate', ['linear'], ['zoom'], minZoom, minShading / 2, maxZoom, maxShading / 2],
        },
        filter: highlightIds.length === 0 ? true : ['in', 'id', ...highlightIds]
      },
      {
        id: this.layerKeyOutline,
        type: 'line',
        source: sourceId,
        'source-layer': dataLayer,
        layout: {
          'line-cap': 'round',
          'line-join': 'round',
        },
        paint: {
          'line-color': 'black',
          'line-width': 2,
          'line-opacity': baseOpacity * 0.5,
          'line-offset': 0,
        },
      },
    );
    if (labels) {
      if (highlights.length > 0) {
        const sourceCentroids: SourceSpecification = {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: highlights.map(nation => ({
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [nation.centroid?.lon || 0, nation.centroid?.lat || 0],
              },
              properties: {title: nation.title, name: nation.name}
            }))
          }
        };
        const sourceIdCentroids = sourceId + '_centroids';
        sources[sourceIdCentroids] = sourceCentroids;

        layers.push({
          id: this.layerKeyLabels,
          type: 'symbol',
          source: sourceIdCentroids,
          layout: {
            'text-field': ['get', 'name'],
            'text-size': 14,
            'text-anchor': 'center',
            'text-allow-overlap': false,
            'text-optional': true,
          },
          paint: {
            'text-color': ['interpolate', ['linear'], 0.60, 0, ['get', 'color'], 1, 'black'],
            'text-halo-color': '#ffffff',
            'text-halo-width': 1.5
          }
        });
      } else {
        layers.push({
          id: this.layerKeyLabels,
          type: 'symbol',
          source: sourceId,
          'source-layer': dataLayer,
          layout: {
            'text-field': ['get', 'name'],
            'text-size': 14,
            'text-anchor': 'center',
            'text-allow-overlap': false,
            'text-optional': true,
          },
          paint: {
            'text-color': ['interpolate', ['linear'], 0.60, 0, ['get', 'color'], 1, 'black'],
            'text-halo-color': '#ffffff',
            'text-halo-width': 1.5
          }
        });
      }
    }

    const handlers: LayerEventHandler[] = [
      {
        type: 'click',
        layer: this.layerKeyFill,
        callback: (event: MapMouseEvent) => {
          const rawFeatures = event.target.queryRenderedFeatures(event.point, {layers: [this.layerKeyFill]});
          const features: any[] = rawFeatures
            .map(feature => feature.properties)
            .map((feature: any) => ({...feature, neighbors: feature.neighbors ? JSON.parse(feature.neighbors) : []}));
          this.selected.emit({features});
        }
      }
    ];

    return {sources, layers, handlers};
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('highlights' in changes) {
      this.applyHighlights();
    }
  }

  protected applyHighlights() {
  }

  protected generateUrl(): string {
    return `${(environment.apiUrl)}/game/worlds/${this.worldId}/nation-tiles/{z}/{x}/{y}`;
  }
}
