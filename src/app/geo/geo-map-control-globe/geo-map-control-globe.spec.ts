import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GeoMapControlGlobe} from './geo-map-control-globe';

describe('GeoMapControlGlobe', () => {
  let component: GeoMapControlGlobe;
  let fixture: ComponentFixture<GeoMapControlGlobe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoMapControlGlobe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeoMapControlGlobe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
