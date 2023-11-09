import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountergroupComponent } from './countergroup.component';

describe('CountergroupComponent', () => {
  let component: CountergroupComponent;
  let fixture: ComponentFixture<CountergroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountergroupComponent]
    });
    fixture = TestBed.createComponent(CountergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a counter when call onAdd method', ()=>{
    var numBefore = component.counters.length
    component.onAdd()
    expect(component.counters.length).toEqual(numBefore+1)
    expect(component.counters[numBefore].num).toEqual(0)

  })

  it('should remove a counter when call removeCounter method', ()=>{
    component.counters[0].num = 1
    component.counters[1].num = 2
    component.removeCounter(0)
    expect(component.counters.length).toEqual(1)
    expect(component.counters[0].num).toEqual(2)
  })

  it('should change to 0 when call reset', ()=>{
    component.reset()
    var len = component.counters.length
    for(var i = 0; i < len; i++){
      expect(component.counters[i].num).toEqual(0)
    }
  })
});
