import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent,CounterComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should reset all number to 0 when call onResetAll', () => {
    component.counters[0].num = 1
    component.counters[1].num = 2
    component.onResetAll()
    expect(component.counters[0].num).toEqual(0)
    expect(component.counters[1].num).toEqual(0)
  })

  it('should delete select counter when call onDelete', () => {
    component.counters[0].num = 1
    component.counters[1].num = 2
    component.counters[2].num = 3
    component.onDelete(0)
    expect(component.counters.length).toEqual(2)
    expect(component.counters[0].num).toEqual(2)
  })

  it('should add counter when call onAdd', () => {
    component.counters[0].num = 1
    component.counters[1].num = 2
    component.counters[2].num = 3
    component.onAdd()
    expect(component.counters.length).toEqual(4)
    expect(component.counters[3].num).toEqual(0)
  })
});
