import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabGovernmentOverview} from './tab-government-overview';

describe('TabGovernmentOverview', () => {
  let component: TabGovernmentOverview;
  let fixture: ComponentFixture<TabGovernmentOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGovernmentOverview]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabGovernmentOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
