import { Component, OnInit, Input } from '@angular/core';

import { OnlineLinesTeam } from "../../classes/session";

@Component({
  selector: 'app-team-mini',
  templateUrl: './team-mini.component.html',
  styleUrls: ['./team-mini.component.scss']
})
export class TeamMiniComponent {

  @Input() team: OnlineLinesTeam;
  
  constructor() { }

}
