import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TerritoriesEconomy} from './territories-economy';

describe('TerritoriesEconomy', () => {
  let component: TerritoriesEconomy;
  let fixture: ComponentFixture<TerritoriesEconomy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerritoriesEconomy]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TerritoriesEconomy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
