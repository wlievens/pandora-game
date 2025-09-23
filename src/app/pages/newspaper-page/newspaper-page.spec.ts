import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NewspaperPage} from './newspaper-page';

describe('NewspaperPage', () => {
  let component: NewspaperPage;
  let fixture: ComponentFixture<NewspaperPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewspaperPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewspaperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
