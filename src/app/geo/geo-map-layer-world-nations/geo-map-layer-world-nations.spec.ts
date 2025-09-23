import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GeoMapLayerWorldNations} from './geo-map-layer-world-nations';

describe('GeoMapLayerWorldNations', () => {
  let component: GeoMapLayerWorldNations;
  let fixture: ComponentFixture<GeoMapLayerWorldNations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoMapLayerWorldNations]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeoMapLayerWorldNations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
