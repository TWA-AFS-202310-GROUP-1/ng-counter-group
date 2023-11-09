import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  OnReset(){
    this.number = 0
    this.change.emit(this.number)

    
  }

}

