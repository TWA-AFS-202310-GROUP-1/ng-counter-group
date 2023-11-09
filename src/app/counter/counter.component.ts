import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterGroupComponent } from '../counter-group/counter-group.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0
  @Output() change = new EventEmitter()
  @Input() id?: number
  @Output() remove = new EventEmitter<number>()

  constructor(private groupComponent: CounterGroupComponent) {}


  onIncrease() {
    this.number++
    this.change.emit(this.number)
  }
  onDecrease() {
    this.number--
    this.change.emit(this.number)
  }
  OnRemove(){
    this.remove.emit(this.id)
  }

}

