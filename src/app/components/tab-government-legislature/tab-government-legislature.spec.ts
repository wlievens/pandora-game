import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabGovernmentLegislature} from './tab-government-legislature';

describe('TabGovernmentLegislature', () => {
  let component: TabGovernmentLegislature;
  let fixture: ComponentFixture<TabGovernmentLegislature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGovernmentLegislature]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabGovernmentLegislature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
