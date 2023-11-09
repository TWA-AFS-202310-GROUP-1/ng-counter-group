import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponentComponent } from './counter-group-component.component';

describe('CounterGroupComponentComponent', () => {
  let component: CounterGroupComponentComponent;
  let fixture: ComponentFixture<CounterGroupComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponentComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
