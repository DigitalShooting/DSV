import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
})
export class ClockComponent implements OnDestroy {
  date: Date = new Date();
  timerID: number;

  constructor() {
    this.timerID = setInterval(() => this.date = new Date(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerID);
  }
}
