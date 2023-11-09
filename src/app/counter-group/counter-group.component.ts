import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counters: { num: number }[] = []

  get sum() {
    return this.counters.reduce(
      (result, current) => result += current.num, 0)
  }

  onCreate() {
    this.counters.push({ num: 0 })
  }

  resetAll()
  {
    this.counters.forEach(element => {
      element.num = 0
    });
  }
  delete(index:number)
  {
    this.counters.splice(index,1)
  }
}
