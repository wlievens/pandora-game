import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BillCreatePage} from './bill-create-page';

describe('BillCreatePage', () => {
  let component: BillCreatePage;
  let fixture: ComponentFixture<BillCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillCreatePage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BillCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
