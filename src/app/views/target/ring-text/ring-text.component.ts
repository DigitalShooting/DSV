import { Component, OnInit, Input } from '@angular/core';

import {Ring, Target} from '../../../classes/session';

@Component({
  selector: '[app-ring-text]',
  templateUrl: './ring-text.component.html',
})
export class RingTextComponent {

  @Input() ring: Ring;
  @Input() nextRing: Ring;
  @Input() ringWidth: number;
  
  ringSize: number;
  fontSize: number;
  fontSizeCorrectionX: number;
  fontSizeCorrectionY: number;

  ngOnChanges() {
    // if (this.ring != null && this.nextRing != null) {
    //   // this.ringSize = this.ring.width - this.nextRing.width;
    //   this.ringSize = this.nextRing.width - this.ring.width;
    // }
    this.fontSize = this.ringWidth*0.6;
    this.fontSizeCorrectionX = this.ringWidth*0.30;
    this.fontSizeCorrectionY = this.ringWidth*0.30;
  }

}
