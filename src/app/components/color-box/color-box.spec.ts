import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorBox} from './color-box';

describe('ColorBox', () => {
  let component: ColorBox;
  let fixture: ComponentFixture<ColorBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorBox]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ColorBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
