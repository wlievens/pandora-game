import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {RegionType} from '../../../api';
import {environment} from '../../../environments/environment';
import {GeoAbstractTerrainLayer} from '../geo-abstract-terrain-layer';
import {GeoLayer, MapSelectionEvent} from '../geo-map/geo-map';

export interface TerritoryProperties {
  id: string;
  name: string;
  area: number;
  type: RegionType;
}

@Component({
  selector: 'pt-geo-map-layer-world-territories',
  imports: [],
  templateUrl: './geo-map-layer-world-territories.html',
  styleUrl: './geo-map-layer-world-territories.scss',
  providers: [{provide: GeoLayer, useExisting: GeoMapLayerWorldTerritories}]
})
export class GeoMapLayerWorldTerritories extends GeoAbstractTerrainLayer<TerritoryProperties> implements OnChanges {
  @Input()
  worldId?: string;

  @Input()
  highlights: { [id: string]: string } = {};

  @Output()
  selected = new EventEmitter<MapSelectionEvent<TerritoryProperties>>();

  ngOnChanges(changes: SimpleChanges) {
    if ('highlights' in changes) {
      this.applyHighlights();
    }
  }

  protected override emitSelected(event: MapSelectionEvent<TerritoryProperties>): void {
    this.selected.emit(event);
  }

  protected override getHighlights(): { [id: string]: string; } {
    return this.highlights;
  }

  protected generateUrl(): string {
    return `${(environment.apiUrl)}/game/worlds/${this.worldId}/territory-tiles/{z}/{x}/{y}`;
  }
}
