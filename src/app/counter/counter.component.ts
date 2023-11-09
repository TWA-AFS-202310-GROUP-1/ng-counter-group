import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0
  @Output() numChange = new EventEmitter()

  onIncrease(){
    this.number ++
    this.numChange.emit(this.number)
  }

  onDecrease(){
    this.number --
    this.numChange.emit(this.number)
  }

  onReset(){
    this.number = 0
    this.numChange.emit(this.number)
  }
}
