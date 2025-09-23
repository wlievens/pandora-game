import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabGovernmentParties} from './tab-government-parties';

describe('TabGovernmentParties', () => {
  let component: TabGovernmentParties;
  let fixture: ComponentFixture<TabGovernmentParties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGovernmentParties]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabGovernmentParties);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
