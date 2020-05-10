import { Component, OnInit, Input } from '@angular/core';

import { Session } from "../../../classes/session";

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.scss']
})
export class SumComponent implements OnInit {

  sum_part: number;
  sum_serie: number;

  @Input() set session(session: Session){
    const part = session.sessionParts[session.sessionIndex];
    const serie = part.serien[part.serien.length-1];
    this.sum_part = part.gesamt;
    this.sum_serie = serie.gesamt;
  };

  constructor() { }

  ngOnInit() {
  }

}
