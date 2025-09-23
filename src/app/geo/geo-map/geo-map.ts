import {DecimalPipe} from '@angular/common';
import {AfterViewChecked, Component, ContentChildren, ElementRef, Input, OnChanges, QueryList, SimpleChanges, ViewChild} from '@angular/core';
import {LayerSpecification, SourceSpecification} from '@maplibre/maplibre-gl-style-spec';
import maplibregl, {ControlPosition, IControl, MapLayerEventType, MapMouseEvent} from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {v4 as uuidv4} from 'uuid';
import {AtlasCellType, LonLat} from '../../../api';

export interface AtlasCellProperties {
  id: string;
  name: string;
  area: number;
  type: AtlasCellType;
  neighbors: { id: string, name: string, type: AtlasCellType }[];
}

export interface MapSelectionEvent<Properties> {
  features: Properties[];
}

export interface LayerEventHandler {
  type: keyof MapLayerEventType;
  layer: string;
  callback: (Event: MapMouseEvent) => void;
}

export interface RenderedLayer {
  sources?: { [key: string]: SourceSpecification };
  layers?: LayerSpecification[];
  handlers?: LayerEventHandler[];
}

export abstract class GeoLayer {
  protected readonly sourceId: string = uuidv4();

  protected map!: maplibregl.Map;

  bindMap(map: maplibregl.Map) {
    this.map = map;
  }

  abstract mapSetupDone(): void;

  abstract refresh(map: maplibregl.Map): void;

  abstract render(): RenderedLayer;
}

export abstract class GeoControl {
  abstract render(): { control: IControl, position: ControlPosition };
}

export const ZOOM_LIMITS = {min: 1, max: 5.5};

@Component({
  selector: 'pt-geo-map',
  imports: [
    DecimalPipe
  ],
  templateUrl: './geo-map.html',
  styleUrl: './geo-map.scss'
})
export class GeoMap implements AfterViewChecked, OnChanges {
  @Input()
  fixed: boolean = false;

  @Input()
  zoom: number = ZOOM_LIMITS.min;

  @Input()
  center: LonLat = {lon: 0, lat: 0};

  @Input()
  projection: 'globe' | 'mercator' = 'mercator';

  @ViewChild('mapContainer')
  private mapContainer?: ElementRef;

  @ContentChildren(GeoLayer)
  private layerComponents!: QueryList<GeoLayer>;

  @ContentChildren(GeoControl)
  private controlComponents!: QueryList<GeoControl>;

  map?: maplibregl.Map = undefined;
  debug = false;

  ngAfterViewChecked() {
    const {mapContainer, map, layerComponents, controlComponents, projection, zoom, center} = this;

    if (!mapContainer) {
      if (map) {
        map.remove();
        this.map = undefined;
      }
      return;
    }
    const element = mapContainer.nativeElement;
    if (!this.map && element.clientWidth > 0 && element.clientHeight > 0) {
      const map = new maplibregl.Map({
        container: mapContainer.nativeElement,
        style: {
          version: 8,
          sources: {},
          layers: [],
          glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf'
        },
        center: [center.lon, center.lat],
        zoom,
        minZoom: ZOOM_LIMITS.min,
        maxZoom: ZOOM_LIMITS.max,
        dragPan: !this.fixed,
        dragRotate: !this.fixed,
        scrollZoom: !this.fixed,
        maplibreLogo: false,
        attributionControl: false,
        renderWorldCopies: false,
      });
      const renderedLayers = layerComponents.map(component => {
        component.bindMap(map);
        return component.render();
      });
      controlComponents.forEach(component => {
        const {control, position} = component.render();
        map.addControl(control, position);
      });
      map.on('style.load', () => {
        renderedLayers.forEach(result => {
          Object.entries(result.sources || []).forEach(([key, value]) => map.style.addSource(key, value));
          (result.layers || []).forEach(layer => map.style.addLayer(layer));
          (result.handlers || []).forEach(handler => map.on(handler.type as any, handler.layer, handler.callback));
        });
        layerComponents.map(component => component.mapSetupDone());
        map.setProjection({type: projection});
      });
      this.map = map;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {map} = this;
    if ('fixed' in changes) {
      if (map) {
        if (this.fixed) {
          map.dragPan.disable();
          map.dragRotate.disable();
          map.scrollZoom.disable();
        } else {
          map.dragPan.enable();
          map.dragRotate.enable();
          map.scrollZoom.enable();
        }
      }
    }
    if ('zoom' in changes) {
      if (map) {
        map.zoomTo(this.zoom);
      }
    }
    if ('center' in changes) {
      if (map) {
        map.setCenter([this.center.lon, this.center.lat]);
      }
    }
  }

  refresh() {
    const {map, layerComponents} = this;
    if (map) {
      layerComponents.forEach(component => component.refresh(map));
    }
  }
}
