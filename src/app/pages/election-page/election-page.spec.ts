import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ElectionPage} from './election-page';

describe('ElectionPage', () => {
  let component: ElectionPage;
  let fixture: ComponentFixture<ElectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ElectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
