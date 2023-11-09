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
});
