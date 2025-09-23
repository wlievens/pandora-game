import {LayerSpecification, SourceSpecification} from '@maplibre/maplibre-gl-style-spec';
import maplibregl, {MapMouseEvent, VectorTileSource} from 'maplibre-gl';
import {AtlasCellType} from '../../api';
import {GeoLayer, LayerEventHandler, MapSelectionEvent, RenderedLayer} from './geo-map/geo-map';

export abstract class GeoAbstractTerrainLayer<Properties> extends GeoLayer {
  protected layerHighlight?: LayerSpecification;

  readonly layerKeyFill = `layer-fill-${this.sourceId}`;
  readonly layerKeyHighlight = `layer-highlight-${this.sourceId}`;
  readonly layerKeyOutline = `layer-outline-${this.sourceId}`;

  mapSetupDone(): void {
    this.applyHighlights();
  }

  override refresh(map: maplibregl.Map): void {
    const source = map.getSource(this.sourceId);
    if (source) {
      (source as VectorTileSource).setTiles([this.generateUrl()]);
    }
  }

  override render(): RenderedLayer {
    const {sourceId} = this;
    const source: SourceSpecification = {
      type: 'vector',
      tiles: [this.generateUrl()],
      minzoom: 0,
      maxzoom: 10
    };
    const dataLayer = 'cells';

    const layerFill: LayerSpecification = {
      id: this.layerKeyFill,
      type: 'fill',
      source: sourceId,
      'source-layer': dataLayer,
      paint: {
        'fill-color': [
          'case',
          ['==', ['get', 'type'], AtlasCellType.Pole], '#D9DADF',
          ['==', ['get', 'type'], AtlasCellType.Continent], '#90b592',
          ['==', ['get', 'type'], AtlasCellType.Island], '#a4bf8e',
          ['==', ['get', 'type'], AtlasCellType.Lake], '#90bfde',
          ['==', ['get', 'type'], AtlasCellType.Sea], '#a0cdeb',
          '#ff90fd'
        ],
        'fill-opacity': 1.0
      }
    };

    const layerHighlight: LayerSpecification = {
      id: this.layerKeyHighlight,
      type: 'fill',
      source: sourceId,
      'source-layer': dataLayer,
      paint: {
        'fill-color': '#d19252',
        'fill-opacity': 0.4
      },
      filter: ['in', 'id', '']
    };

    const layerOutline: LayerSpecification = {
      id: this.layerKeyOutline,
      type: 'line',
      source: sourceId,
      'source-layer': dataLayer,
      paint: {
        'line-color': '#3e3e42',
        'line-width': 0.5,
        'line-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          1.0, 0,
          2.0, 1
        ]
      },
    };

    this.layerHighlight = layerHighlight;

    const layers: LayerSpecification[] = [layerFill, layerHighlight, layerOutline];
    const sources: { [key: string]: SourceSpecification } = {};
    sources[sourceId] = source;
    const handlers: LayerEventHandler[] = [
      {
        type: 'click',
        layer: this.layerKeyFill,
        callback: (event: MapMouseEvent) => {
          const rawFeatures = event.target.queryRenderedFeatures(event.point, {layers: [this.layerKeyFill]});
          const features: any[] = rawFeatures
            .map(feature => feature.properties)
            .map((feature: any) => ({...feature, neighbors: feature.neighbors ? JSON.parse(feature.neighbors) : []}));
          this.emitSelected({features});
        }
      }
    ]

    return {sources, layers, handlers};
  }

  protected abstract generateUrl(): string;

  protected abstract emitSelected(event: MapSelectionEvent<Properties>): void;

  protected abstract getHighlights(): { [id: string]: string } ;

  protected applyHighlights() {
    const {map, layerHighlight} = this;
    if (map && layerHighlight) {
      const highlights = this.getHighlights();
      map.setFilter(this.layerKeyHighlight, ['in', 'id', ...Object.keys(highlights)]);
      const entries = Object.entries(highlights);
      if (entries.length > 0) {
        const colorTable = ['match', ['get', 'id']];
        entries.forEach(([id, color]) => colorTable.push(id, color))
        colorTable.push('#ff00ff');
        map.setPaintProperty(this.layerKeyHighlight, 'fill-color', colorTable);
      }
    }
  }
}
