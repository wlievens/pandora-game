import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OfficePage} from './office-page';

describe('OfficePage', () => {
  let component: OfficePage;
  let fixture: ComponentFixture<OfficePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficePage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OfficePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
