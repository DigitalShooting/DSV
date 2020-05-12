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
  
  vereinFontClass = "";
  ngOnChanges() {
    let vereinLength = this.user.verein.length;
    this.vereinFontClass = "medium";
    if (vereinLength > 20) this.vereinFontClass = "small";
  }

  ngOnInit() {
  }

}
