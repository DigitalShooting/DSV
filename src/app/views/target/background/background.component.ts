import { Component, OnInit, Input } from '@angular/core';

import { Target } from "../../../classes/session";

@Component({
  selector: '[app-background]',
  templateUrl: './background.component.html',
})
export class BackgroundComponent {
  
  @Input() target: Target;
  
  radius: number;
  border_width: number;
  ringWidth: number;
  
  ngOnChanges() {
    this.radius = this.target.ringe[this.target.ringe.length-1].width + 1;
    this.ringWidth = this.target.ringe[1].width - this.target.ringe[0].width;
    this.border_width = this.radius / 400;
  }
}
