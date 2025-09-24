import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GeoMapLayerGrid} from './geo-map-layer-grid';

describe('GeoMapLayerGrid', () => {
  let component: GeoMapLayerGrid;
  let fixture: ComponentFixture<GeoMapLayerGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoMapLayerGrid]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeoMapLayerGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
