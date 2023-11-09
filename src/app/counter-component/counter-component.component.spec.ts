import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponentComponent } from './counter-component.component';

describe('CounterComponentComponent', () => {
  let component: CounterComponentComponent;
  let fixture: ComponentFixture<CounterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponentComponent]
    });
    fixture = TestBed.createComponent(CounterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase number when invoke onIncrease', ()=>{
    component.number = 2;
    component.onIncrease();
    expect(component.number).toEqual(3);
  })

  it('should decrease number when invoke onDecrease', ()=>{
    component.number = 2;
    component.onDecrease();
    expect(component.number).toEqual(1);
  })
  it('should reset the counter', () => {
    component.number = 5; 
    component.onReset();
    expect(component.number).toEqual(0);
  });


});
