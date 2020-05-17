import { Component, OnInit, Input } from '@angular/core';

import { User, Config } from "../../../classes/session";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() config: Config;

  constructor() { }

  ngOnInit() {
  }

}
