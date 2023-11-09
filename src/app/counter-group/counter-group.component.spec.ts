import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from '../counter/counter.component';

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

  it('should sum to be the sum of counters', () => {
    component.counters = [
      { num: 1 },
      { num: 2 },
      { num: 3 }
    ]
    expect(component.sum).toEqual(6);
  });

  it('should add one to the counters when call onAdd', () => {
    component.counters = [
      { num: 1 },
      { num: 2 },
      { num: 3 }
    ]
    component.onAdd()

    expect(component.counters.length).toEqual(4);
  });

  it('should remove one counter based on index when call onRemove', () => {
    component.counters = [
      { num: 1 },
      { num: 2 },
      { num: 3 }
    ]
    component.onRemove(1)

    expect(component.counters.length).toEqual(2);
  });

  it('should remove all counters when call onResetAll', () => {
    component.counters = [
      { num: 1 },
      { num: 2 },
      { num: 3 }
    ]
    component.onRestAll()

    expect(component.sum).toEqual(0);
  });

});
