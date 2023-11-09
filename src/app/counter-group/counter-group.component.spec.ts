import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../counter/counter.component';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove counter when removeCounter', () => {
    component.counters = [{num: 3}, {num: 2}, {num: -1}];

    component.removeCounter(1)

    expect(component.counters.length).toBe(2);
    expect(component.counters[0].num).toBe(3);
    expect(component.counters[1].num).toBe(-1);
    expect(component.sum).toBe(2);
  });

  it('should reset counter when onreset', () => {
    component.counters = [{num: 3}, {num: 2}, {num: -1}];
    component.Reset()
    expect(component.counters[0].num).toBe(0);
    expect(component.counters[1].num).toBe(0);
    expect(component.counters[2].num).toBe(0);
    expect(component.sum).toBe(0);
  });


});
