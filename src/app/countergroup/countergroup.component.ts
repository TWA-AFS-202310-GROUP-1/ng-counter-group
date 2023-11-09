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

  onAdd()
  {
    this.counters.push({num: 0})
  }

  get sum(){
    return this.counters.reduce((result, current)=>result+current.num, 0)
  }

  removeCounter(_t5: number) {
    this.counters.splice(_t5, 1)
  }

  reset(){
    this.counters.forEach(x=>x.num=0)
  }
}
