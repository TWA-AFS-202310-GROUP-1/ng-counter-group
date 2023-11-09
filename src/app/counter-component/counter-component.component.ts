import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent {
  @Input() number = 0
  @Output() change = new EventEmitter()
  onIncrease() {
    this.number++;
    this.change.emit(this.number)
  }
  onDecrease() {
    this.number--;
    this.change.emit(this.number)
  }

}
function output(): (target: CounterComponentComponent, propertyKey: "change") => void {
  throw new Error('Function not implemented.');
}

