import { Component, OnInit, Input } from '@angular/core';

import {Ring, Target} from '../../../classes/session';

@Component({
  selector: '[app-ring]',
  templateUrl: './ring.component.html',
})
export class RingComponent {
  @Input() ring: Ring;
  @Input() ringWidth: number;
  @Input() border_width: number;

}
