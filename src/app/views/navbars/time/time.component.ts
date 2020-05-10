import { Component, OnInit, Input } from '@angular/core';

import { Session } from "../../../classes/session";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  @Input() session: Session;

  constructor() { }

  ngOnInit() {
  }

}
