import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponentComponent } from './counter-group-component.component';
import { CounterComponentComponent } from '../counter-component/counter-component.component';

describe('CounterGroupComponentComponent', () => {
  let component: CounterGroupComponentComponent;
  let fixture: ComponentFixture<CounterGroupComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponentComponent, CounterComponentComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a counter', () => {
    const initialLength = component.counters.length;
    component.onAdd();
    expect(component.counters.length).toEqual(initialLength + 1);
  });
  it('should remove a counter', () => {
    component.onAdd();
    const initialLength = component.counters.length;
    component.onRemove(0);
    expect(component.counters.length).toEqual(initialLength - 1);
  });

});
