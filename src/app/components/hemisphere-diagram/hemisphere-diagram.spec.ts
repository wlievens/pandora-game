import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HemisphereDiagram} from './hemisphere-diagram';

describe('HemisphereDiagram', () => {
  let component: HemisphereDiagram;
  let fixture: ComponentFixture<HemisphereDiagram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HemisphereDiagram]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HemisphereDiagram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
