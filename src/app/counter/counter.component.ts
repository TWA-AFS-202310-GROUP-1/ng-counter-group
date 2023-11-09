import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
[x: string]: any;
  @Input() number = 0
  @Input() removed = false
  @Output() change = new EventEmitter()
  @Output() callRemove = new EventEmitter()

  onIncrease() {
    this.number++
    this.change.emit(this.number)
  }
  onDecrease() {
    this.number--
    this.change.emit(this.number)
  }
  reset() {
    this.number = 0
    this.change.emit(this.number)
  }
  remove()
  {
    this.callRemove.emit()
  }
}
