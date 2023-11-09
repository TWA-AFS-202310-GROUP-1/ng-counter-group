import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return sum of numbers when call sum', () => {
    component.counters = [
      { num: 1 },
      { num: 2 },
      { num: 3 },
    ]
    expect(component.sum).toEqual(6)
  });

  it('should a new counter with number 0 when call onCreate', () => {
    component.counters = [
      { num: 1 },
      { num: 2 },
      { num: 3 },
    ]
    component.onCreate()
    expect(component.counters.length).toEqual(4)
    expect(component.counters[3].num).toEqual(0)
  });

  it('should reset all when call resetAll', () => {
    component.counters = [
      { num: 1 },
      { num: 2 },
      { num: 3 },
    ]
    component.resetAll()
    expect(component.counters.length).toEqual(3)
    component.counters.forEach(element => {
      expect(element.num).toEqual(0)
    });
  });

  it('should delete specific counter whencall delete', () => {
    component.counters = [
      { num: 1 },
      { num: 2 },
      { num: 3 },
    ]
    component.delete(1)
    expect(component.counters.length).toEqual(2)
    expect(component.counters).toEqual([
      { num: 1 },
      { num: 3 },
    ])
  });
});
