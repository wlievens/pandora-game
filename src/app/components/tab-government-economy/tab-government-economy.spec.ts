import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabGovernmentEconomy} from './tab-government-economy';

describe('TabGovernmentEconomy', () => {
  let component: TabGovernmentEconomy;
  let fixture: ComponentFixture<TabGovernmentEconomy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGovernmentEconomy]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabGovernmentEconomy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
