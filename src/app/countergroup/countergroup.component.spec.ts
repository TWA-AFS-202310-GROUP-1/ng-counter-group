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

  })
});
