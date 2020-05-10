import { Component, Input } from '@angular/core';

import { Shot } from "../../../classes/session";

@Component({
  selector: 'app-shot-arrow',
  templateUrl: './shotArrow.component.html',
  styleUrls: ['./shotArrow.component.scss']
})
export class ShotArrowComponent {

  arrow: String;
  angle: String;

  @Input() set shot(shot: Shot) {
    const winkel = parseFloat(shot.winkel);
    if (shot.innenZehner) {
      if (shot.teiler < 10) {
        this.arrow = "&#9673;";
      }
      else {
        this.arrow = "&#9099;";
      }
      this.angle = "rotate(" + (-winkel - 225) + "deg)";
    }
    else {
      this.arrow = "&#8594;";
      this.angle = "rotate(" + (-winkel) + "deg)";
    }
  }

  constructor() { }

}
