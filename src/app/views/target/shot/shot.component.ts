import { Component, OnInit, Input } from '@angular/core';

import { Shot, Target, Ring } from "../../../classes/session";

@Component({
  selector: '[app-shot]',
  templateUrl: './shot.component.html',
})
export class ShotComponent {
  @Input() shot: Shot;
  @Input() target: Target;
  @Input() transparent: boolean;
  
  ring: Ring;
  hitColor: string;
  ngOnChanges() {
    this.ring = this.target.ringe.find(ring => ring.value == Math.floor(this.shot.ring.int));
    
    this.hitColor = this.target.defaultHitColor;
    if (this.ring) {
      this.hitColor = this.ring.hitColor;
    }
  }
}
