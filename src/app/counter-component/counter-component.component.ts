import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent {
  @Input() number = 0
  @Output() change = new EventEmitter()
  @Output() remove = new EventEmitter(); 

  onIncrease() {
    this.number++;
    this.change.emit(this.number)
  }
  onDecrease() {
    this.number--;
    this.change.emit(this.number)
  }
  onRemove() {
    this.remove.emit(); 
  }
  onReset() {
    this.number = 0
    this.change.emit(this.number)
  }
}

