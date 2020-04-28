import { Component, Input } from '@angular/core';

import {Ring} from '../../../classes/session';

@Component({
  selector: '[app-ring-circle]',
  templateUrl: './ring-circle.component.html',
})
export class RingCircleComponent {
  @Input() ring: Ring;
  @Input() border_width: number;
}
