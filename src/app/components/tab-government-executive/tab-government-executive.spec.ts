import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabGovernmentExecutive} from './tab-government-executive';

describe('TabGovernmentExecutive', () => {
  let component: TabGovernmentExecutive;
  let fixture: ComponentFixture<TabGovernmentExecutive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGovernmentExecutive]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabGovernmentExecutive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
