import { Component, OnInit, Input } from '@angular/core';

import { User } from "../../../classes/session";

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
