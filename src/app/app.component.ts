import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { CounterGroupComponent } from './counter-group/counter-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-counter-group';
}
