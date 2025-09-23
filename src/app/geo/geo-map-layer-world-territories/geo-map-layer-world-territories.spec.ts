import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GeoMapLayerWorldTerritories} from './geo-map-layer-world-territories';

describe('GeoMapLayerWorldTerritories', () => {
  let component: GeoMapLayerWorldTerritories;
  let fixture: ComponentFixture<GeoMapLayerWorldTerritories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoMapLayerWorldTerritories]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeoMapLayerWorldTerritories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
