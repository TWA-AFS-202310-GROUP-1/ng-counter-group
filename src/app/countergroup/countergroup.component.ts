import { Component } from '@angular/core';

@Component({
  selector: 'app-countergroup',
  templateUrl: './countergroup.component.html',
  styleUrls: ['./countergroup.component.css']
})
export class CountergroupComponent {
  counters: {num: number}[] = [
    {num: 1},
    {num: 2},
    {num: 3}
  ]

  get sum(){
    return this.counters.reduce((result, current)=>result+current.num, 0)
  }
}
