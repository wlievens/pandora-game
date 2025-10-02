import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Portrait} from './portrait';

describe('Portrait', () => {
  let component: Portrait;
  let fixture: ComponentFixture<Portrait>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portrait]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Portrait);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
