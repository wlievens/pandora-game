import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GeoMapControlFullscreen} from './geo-map-control-fullscreen';

describe('GeoMapControlFullscreen', () => {
  let component: GeoMapControlFullscreen;
  let fixture: ComponentFixture<GeoMapControlFullscreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoMapControlFullscreen]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeoMapControlFullscreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
