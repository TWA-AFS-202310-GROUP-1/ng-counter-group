import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { CounterGroupComponentComponent } from './counter-group-component/counter-group-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponentComponent,
    CounterGroupComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
