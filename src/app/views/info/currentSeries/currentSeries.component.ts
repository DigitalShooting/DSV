import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Session, Serie, Target } from "../../../classes/session";

@Component({
  selector: 'app-current-series',
  templateUrl: './currentSeries.component.html',
  styleUrls: ['./currentSeries.component.scss']
})
export class CurrentSeriesComponent {
  
  @Input() series: Serie;
  @Input() selectedShotIndex: number;
  @Output() onChangeSelection = new EventEmitter<number>();
  
  selectShot(index: number) {
    this.onChangeSelection.emit(index);
  }
  
  constructor() { }
}
