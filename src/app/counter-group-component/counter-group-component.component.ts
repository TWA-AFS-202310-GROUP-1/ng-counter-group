import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group-component',
  templateUrl: './counter-group-component.component.html',
  styleUrls: ['./counter-group-component.component.css']
})
export class CounterGroupComponentComponent {
  counters:{ num :number} []= [
    {num :1},
    {num :2},
    {num :3}
  ]

}
