import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FractionsTable} from './fractions-table';

describe('FractionsTable', () => {
  let component: FractionsTable;
  let fixture: ComponentFixture<FractionsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FractionsTable]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FractionsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
