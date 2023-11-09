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
});
