import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PartyCreatePage} from './party-create-page';

describe('PartyCreatePage', () => {
  let component: PartyCreatePage;
  let fixture: ComponentFixture<PartyCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyCreatePage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PartyCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
