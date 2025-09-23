import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NationListPage} from './nation-list-page';

describe('NationListPage', () => {
  let component: NationListPage;
  let fixture: ComponentFixture<NationListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationListPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NationListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
