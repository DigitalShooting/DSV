import { Component, OnInit, Input } from '@angular/core';

import { Shot, Target, Ring, Color } from "../../../classes/session";

@Component({
  selector: '[app-shot]',
  templateUrl: './shot.component.html',
})
export class ShotComponent {
  @Input() shot: Shot;
  @Input() target: Target;
  @Input() transparent: boolean;
  
  ring: Ring;
  ngOnChanges() {
    this.ring = this.target.rings.find(ring => ring.value == Math.floor(this.shot.ring));

    this.hit_color = this.target.default_hit_color;
    if (this.ring) {
      this.hit_color = this.ring.hit_color;
    }
  }

  hit_color: Color;
}
