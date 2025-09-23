import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GeoMapControlNavigation} from './geo-map-control-navigation';

describe('GeoMapControlNavigation', () => {
  let component: GeoMapControlNavigation;
  let fixture: ComponentFixture<GeoMapControlNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoMapControlNavigation]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeoMapControlNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
