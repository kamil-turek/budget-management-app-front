import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesTabComponent } from './incomes-tab.component';

describe('IncomesTabComponent', () => {
  let component: IncomesTabComponent;
  let fixture: ComponentFixture<IncomesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomesTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
