import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabGovernmentTerritories} from './tab-government-territories';

describe('TabGovernmentTerritories', () => {
  let component: TabGovernmentTerritories;
  let fixture: ComponentFixture<TabGovernmentTerritories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGovernmentTerritories]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabGovernmentTerritories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
