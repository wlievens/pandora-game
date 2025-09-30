import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoryPage } from './territory-page';

describe('TerritoryPage', () => {
  let component: TerritoryPage;
  let fixture: ComponentFixture<TerritoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerritoryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerritoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
