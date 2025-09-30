import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IdeologyRatings} from './ideology-ratings';

describe('IdeologyRatings', () => {
  let component: IdeologyRatings;
  let fixture: ComponentFixture<IdeologyRatings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeologyRatings]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IdeologyRatings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
