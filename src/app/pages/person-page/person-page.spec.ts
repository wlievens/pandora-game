import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonPage} from './person-page';

describe('PersonPage', () => {
  let component: PersonPage;
  let fixture: ComponentFixture<PersonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
