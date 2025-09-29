import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GeoMapLayerBackground} from './geo-map-layer-background';

describe('GeoMapLayerBackground', () => {
  let component: GeoMapLayerBackground;
  let fixture: ComponentFixture<GeoMapLayerBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoMapLayerBackground]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeoMapLayerBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
