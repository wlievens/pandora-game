import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WorldListPage} from './world-list-page';

describe('WorldListPage', () => {
  let component: WorldListPage;
  let fixture: ComponentFixture<WorldListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldListPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WorldListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
