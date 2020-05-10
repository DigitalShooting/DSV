import { Component, Input } from '@angular/core';

import { Session, Shot } from "../../../classes/session";

@Component({
  selector: 'app-current-shot',
  templateUrl: './currentShot.component.html',
  styleUrls: ['./currentShot.component.scss']
})
export class CurrentShotComponent {

  @Input() shot: Shot;

  constructor() { }

}
