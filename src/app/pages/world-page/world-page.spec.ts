import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WorldPage} from './world-page';

describe('WorldPage', () => {
  let component: WorldPage;
  let fixture: ComponentFixture<WorldPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WorldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
