import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GeoMapControlScale} from './geo-map-control-scale';

describe('GeoMapControlScale', () => {
  let component: GeoMapControlScale;
  let fixture: ComponentFixture<GeoMapControlScale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoMapControlScale]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeoMapControlScale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
